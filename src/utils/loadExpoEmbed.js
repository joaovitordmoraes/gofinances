const loadExpoEmbed = (callback) => {

    const existingScript = document.getElementById('expoEmbed');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://snack.expo.dev/embed.js';
      script.id = 'expoEmbed';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default loadExpoEmbed;