import {useContext, useEffect} from 'preact/hooks';
import Button from 'src/components/Button';
import DonationsContext from 'src/contexts/donations-context';
import OptionsContext from 'src/contexts/options-context';
import {replaceKeys} from 'src/helpers/interpolation';
import {
	DonationFrequency,
	LayoutMode,
	OnSubmitObject
} from 'src/helpers/options-types';
import useI18n from 'src/hooks/use-i18n';

const UTM_MEDIUM = 'donate-button-0.2'; // Update this if the major version changes
function constructEveryUrl({
	company,
	frequency,
	amount,
	mode,
	extras = {}
}: {
	company: string;
	frequency: DonationFrequency;
	amount: string;
	mode: LayoutMode;
	extras?: OnSubmitObject['params'];
}) {
	const baseUrl = `https://www.every.org/${company}/donate`;
	const parameters = Object.entries({
		frequency,
		amount,
		utm_campaign: 'single-or-split',
		utm_content: mode.toLowerCase(),
		utm_source: company,
		utm_medium: UTM_MEDIUM,
		...extras
	})
		.map((entry) => entry.join('='))
		.join('&');

	return `${baseUrl}?${parameters}`;
}

const getButtonTextFormatted = (
	text: string,
	currency: string,
	amount?: string
) => {
	if (amount && !Number.isNaN(Number(amount))) {
		return replaceKeys({amount: `$${amount} ${currency}`}, text);
	}

	return replaceKeys({amount: ''}, text);
};

interface DonateButtonProps {
	extraClasses?: string[];
	monthlyDonation: boolean;
}
const DonateButton = ({
	monthlyDonation,
	extraClasses = []
}: DonateButtonProps) => {
	const lang = useI18n();
	const donationsContextValue = useContext(DonationsContext);
	const {onSubmit, currency, mode} = useContext(OptionsContext);
	const formText = monthlyDonation ? lang.monthly : lang.oneTime;
	const donationAmount = donationsContextValue?.donationAmount;

	useEffect(() => {
		const handler = (ev: KeyboardEvent) => {
			if (ev.key === 'Enter') {
				handleDonateButton(mode);
			}
		};

		window.addEventListener('keydown', handler);

		return () => {
			window.removeEventListener('keydown', handler);
		};
	});

	const handleDonateButton = (mode: LayoutMode) => {
		if (!donationAmount || Number.isNaN(Number(donationAmount))) {
			return;
		}

		if (Number(donationAmount) < 10) {
			donationsContextValue?.setCustomInputError(
				'The amount must be at least $10'
			);
			return;
		}

		if (Number(donationAmount) > 1000000) {
			donationsContextValue?.setCustomInputError(
				'The amount must be at the most $1,000,000'
			);
			return;
		}

		const frequency = monthlyDonation ? 'MONTHLY' : 'ONCE';

		if (typeof onSubmit === 'function') {
			onSubmit({amount: donationAmount, frequency});
		} else {
			const url = constructEveryUrl({
				company: onSubmit.charity,
				frequency,
				amount: donationAmount,
				mode,
				extras: onSubmit.params
			});
			window.location.href = url;
		}
	};

	return (
		<Button
			extraClasses={extraClasses}
			handleClick={() => {
				handleDonateButton(mode);
			}}
		>
			{getButtonTextFormatted(formText.button, currency, donationAmount)}
		</Button>
	);
};

export default DonateButton;
