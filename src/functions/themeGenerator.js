import { colorblender, extend } from "colorblender";
import nameExtension from "colorblender/extensions/name";
import { paletten } from "paletten";


extend([nameExtension]);


export function generateTones(baseColour, themeName = ""){
    let newThemeName = themeName.toLocaleLowerCase().replaceAll("", "-") 
    || 
    colorblender(baseColour).name.toLocaleLowerCase().replaceAll("", "-");

    let rawPalettenOutput = paletten(baseColour);

    let finalizedOutput = {
        name: newThemeName,
        colours: []
    };

    let formattedColoursList = Object.keys(rawPalettenOutput).map((key) => {
        return {
            strength: key,
            hex: rawPalettenOutput[key],
            rgba: colorblender(rawPalettenOutput[key]).rgb()
        }
    });

    finalizedOutput.colours = formattedColoursList;

    return finalizedOutput;
}