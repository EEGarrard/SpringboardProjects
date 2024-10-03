
const currentTime = new Date();

const isDaytime = currentTime.getHours() >= 6 && currentTime.getHours() < 18;
const loadConfig = async (isDaytime) => {
    const theme = await import('./theme.mjs');
    isDaytime ? theme.setLightTheme() : theme.setDarkTheme();
    return loadConfig
    }
    loadConfig({});