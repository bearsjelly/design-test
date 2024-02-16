import StyleDictionary from "style-dictionary";
import { registerTransforms } from "@tokens-studio/sd-transforms";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ["token/**/*.json"], // <-- make sure to have this match your token files!!!
  platforms: {
    js: {
      transformGroup: "tokens-studio",
      buildPath: "build/js/",
      files: [
        {
          destination: "icon.js",
          format: "javascript/es6",
        },
        // {
        //   destination: "color.js",
        //   format: "javascript/es6",
        //   filter: {
        //     attributes: {
        //       category: ["roleColor", "common"],
        //     },
        //   },
        // },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
