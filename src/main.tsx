import App from '@components/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const mainElement = document.getElementById('main');
if (mainElement)
	createRoot(mainElement).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
