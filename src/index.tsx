import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './app/main';
import { LightTheme, setGlobalTheme } from './lib/assets/themes';
import './lib/index.css';

// Inicializar o tema global
setGlobalTheme(LightTheme);

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(
	<StrictMode>
		<ThemeProvider theme={LightTheme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
);
