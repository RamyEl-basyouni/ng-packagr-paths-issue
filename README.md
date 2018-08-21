## OnTrack 6 Installation

The README file is responsible for all Ontrack structures,installation and standards should be applied to the presentation layer
## prerequisites 
```
  Install NodeJS

  ```

  ## global Installation

```
 npm install -g typescript
 npm install typings -g  

  ```

## Presentation Installation

```
 npm install 
 npm run tsc -w

  ```

  ## WebPack Installation

```
 npm install global  
 npm run tsc -w

  ```
## Highcharts 

```

To Fix Gauge chart problem with color replace the following if condition with comments into 
node_modules\highcharts\highcharts-more.src.js

            // To avoid having weighty logic to place, update and remove the backgrounds,
            // push them to the first axis' plot bands and borrow the existing logic there.
            if (backgroundOption) {
                each([].concat(splat(backgroundOption)).reverse(), function (config) {
                    var backgroundColor = config.backgroundColor,  // if defined, replace the old one (specific for gradients)
                        // axisUserOptions = firstAxis.userOptions;
                    config = merge(pane.defaultBackgroundOptions, config);
                    if (backgroundColor) {
                        config.backgroundColor = backgroundColor;
                    }
                    config.color = config.backgroundColor; // due to naming in plotBands
                    // firstAxis.options.plotBands.unshift(config);
                    // axisUserOptions.plotBands = axisUserOptions.plotBands || []; // #3176
                    // if (axisUserOptions.plotBands !== firstAxis.options.plotBands) {
                    //     axisUserOptions.plotBands.unshift(config);
                    // }
                });
            }


```