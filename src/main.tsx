import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@App';

const mainElement = document.getElementById('main');
if (mainElement)
	createRoot(mainElement).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
