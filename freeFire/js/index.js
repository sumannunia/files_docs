// var padding = { top: 20, right: 40, bottom: 0, left: 0 },
//   w = 300 - padding.left - padding.right,
//   h = 300 - padding.top - padding.bottom,
//   r = Math.min(w, h) / 2,
//   rotation = 0,
//   oldrotation = 0,
//   picked = 100000,
//   oldpick = [],
//   color = d3.scale.category20(); //category20c()
// //randomNumbers = getRandomNumbers();
// //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
// var data = [
//   {
//     label: "Dell LAPTOP",
//     value: 1,
//     question:
//       "What CSS property is used for specifying the area between the content and its border?"
//   }, // padding
//   {
//     label: "IMAC PRO",
//     value: 2,
//     question: "What CSS property is used for changing the font?"
//   }, //font-family
//   {
//     label: "SUZUKI",
//     value: 3,
//     question: "What CSS property is used for changing the color of text?"
//   }, //color
//   {
//     label: "HONDA",
//     value: 4,
//     question: "What CSS property is used for changing the boldness of text?"
//   }, //font-weight
//   {
//     label: "FERRARI",
//     value: 5,
//     question: "What CSS property is used for changing the size of text?"
//   }, //font-size
//   {
//     label: "APARTMENT",
//     value: 6,
//     question:
//       "What CSS property is used for changing the background color of a box?"
//   }, //background-color
//   {
//     label: "IPAD PRO",
//     value: 7,
//     question:
//       "Which word is used for specifying an HTML tag that is inside another tag?"
//   }, //nesting
//   {
//     label: "LAND",
//     value: 8,
//     question:
//       "Which side of the box is the third number in: margin:1px 1px 1px 1px; ?"
//   }, //bottom

// ];
// var svg = d3
//   .select("#chart")
//   .append("svg")
//   .data([data])
//   .attr("width", w + padding.left + padding.right)
//   .attr("height", h + padding.top + padding.bottom);
// var container = svg
//   .append("g")
//   .attr("class", "chartholder")
//   .attr(
//     "transform",
//     "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
//   );
// var vis = container.append("g");

// var pie = d3.layout
//   .pie()
//   .sort(null)
//   .value(function (d) {
//     return 1;
//   });
// // declare an arc generator function
// var arc = d3.svg.arc().outerRadius(r);
// // select paths, use arc generator to draw
// var arcs = vis
//   .selectAll("g.slice")
//   .data(pie)
//   .enter()
//   .append("g")
//   .attr("class", "slice");

// arcs
//   .append("path")
//   .attr("fill", function (d, i) {
//     return color(i);
//   })
//   .attr("d", function (d) {
//     return arc(d);
//   });
// // add the text
// arcs
//   .append("text")
//   .attr("transform", function (d) {
//     d.innerRadius = 0;
//     d.outerRadius = r;
//     d.angle = (d.startAngle + d.endAngle) / 2;
//     return (
//       "rotate(" +
//       ((d.angle * 180) / Math.PI - 90) +
//       ")translate(" +
//       (d.outerRadius - 10) +
//       ")"
//     );
//   })
//   .attr("text-anchor", "end")
//   .text(function (d, i) {
//     return data[i].label;
//   });
// container.on("click", spin);
// function spin(d) {
//   container.on("click", null);
//   //all slices have been seen, all done
//   console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
//   if (oldpick.length == data.length) {
//     console.log("done");
//     container.on("click", null);
//     return;
//   }
//   var ps = 360 / data.length,
//     pieslice = Math.round(1440 / data.length),
//     rng = Math.floor(Math.random() * 1440 + 360);

//   rotation = Math.round(rng / ps) * ps;

//   picked = Math.round(data.length - (rotation % 360) / ps);
//   picked = picked >= data.length ? picked % data.length : picked;
//   if (oldpick.indexOf(picked) !== -1) {
//     d3.select(this).call(spin);
//     return;
//   } else {
//     oldpick.push(picked);
//   }
//   rotation += 90 - Math.round(ps / 2);
//   vis
//     .transition()
//     .duration(3000)
//     .attrTween("transform", rotTween)
//     .each("end", function () {
//       //mark question as seen
//       d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr(
//         "fill",
//         "#111"
//       );
//       //populate question
//       d3.select("#question h1").text(data[picked].question);
//       oldrotation = rotation;

//       /* Get the result value from object "data" */
//       console.log(data[picked].value);

//       /* Comment the below line for restrict spin to sngle time */
//       container.on("click", spin);
//     });
// }
// //make arrow
// svg
//   .append("g")
//   .attr(
//     "transform",
//     "translate(" +
//       (w + padding.left + padding.right) +
//       "," +
//       (h / 2 + padding.top) +
//       ")"
//   )
//   .append("path")
//   .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
//   .style({ fill: "black" });
// //draw spin circle
// container
//   .append("circle")
//   .attr("cx", 0)
//   .attr("cy", 0)
//   .attr("r", 60)
//   .style({ fill: "white", cursor: "pointer" });
// //spin text
// container
//   .append("text")
//   .attr("x", 0)
//   .attr("y", 15)
//   .attr("text-anchor", "middle")
//   .text("SPIN")
//   .style({ "font-weight": "bold", "font-size": "30px" });

// function rotTween(to) {
//   var i = d3.interpolate(oldrotation % 360, rotation);
//   return function (t) {
//     return "rotate(" + i(t) + ")";
//   };
// }

// function getRandomNumbers() {
//   var array = new Uint16Array(1000);
//   var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
//   if (
//     window.hasOwnProperty("crypto") &&
//     typeof window.crypto.getRandomValues === "function"
//   ) {
//     window.crypto.getRandomValues(array);
//     console.log("works");
//   } else {
//     //no support for crypto, get crappy random numbers
//     for (var i = 0; i < 1000; i++) {
//       array[i] = Math.floor(Math.random() * 100000) + 1;
//     }
//   }
//   return array;
// }
// $(function () {
//     // $("svg circle").on("mouseenter", function () {

//     //     var oldR = $(this).attr("r");

//     //     var newR = (((oldR*2)/100)*120)/2; // 120% width

//     //     $(this).attr("r", newR);

//     // });
//     $("svg circle").attr('r', '40')
// });

// Create new wheel object specifying the parameters at creation time.
            var theWheel = new Winwheel({
                'numSegments'       : 8,                 // Specify number of segments.
                'outerRadius'       : 200,               // Set outer radius so wheel fits inside the background.
                'drawText'          : true,              // Code drawn text can be used with segment images.
                'textFontSize'      : 16,
                'textOrientation'   : 'curved',
                'textAlignment'     : 'inner',
                'textMargin'        : 90,
                'textFontFamily'    : 'monospace',
                'textStrokeStyle'   : 'black',
                'textLineWidth'     : 3,
                'textFillStyle'     : 'white',
                'drawMode'          : 'segmentImage',    // Must be segmentImage to draw wheel using one image per segemnt.
                'segments'          :                    // Define segments including image and text.
                [
                   {'image' : './images/jane.png',  'text' : 'Jane'},
                   {'image' : './images/jane.png',   'text' : 'Tom'},
                   {'image' : './images/jane.png',  'text' : 'Mary'},
                   {'image' : './images/jane.png',  'text' : 'Alex'},
                   {'image' : './images/jane.png', 'text' : 'Sarah'},
                   {'image' : './images/jane.png', 'text' : 'Bruce'},
                   {'image' : './images/jane.png',  'text' : 'Rose'},
                   {'image' : './images/jane.png', 'text' : 'Steve'}
                ],
                'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,     // Duration in seconds.
                    'spins'    : 8,     // Number of complete spins.
                    'callbackFinished' : alertPrize
                }
            });

            // Vars used by the code in this page to do power controls.
            var wheelPower    = 0;
            var wheelSpinning = false;

            // -------------------------------------------------------
            // Function to handle the onClick on the power buttons.
            // -------------------------------------------------------
            function powerSelected(powerLevel)
            {
                // Ensure that power can't be changed while wheel is spinning.
                if (wheelSpinning == false)
                {
                    // Reset all to grey incase this is not the first time the user has selected the power.
                    document.getElementById('pw1').className = "";
                    document.getElementById('pw2').className = "";
                    document.getElementById('pw3').className = "";

                    // Now light up all cells below-and-including the one selected by changing the class.
                    if (powerLevel >= 1)
                    {
                        document.getElementById('pw1').className = "pw1";
                    }

                    if (powerLevel >= 2)
                    {
                        document.getElementById('pw2').className = "pw2";
                    }

                    if (powerLevel >= 3)
                    {
                        document.getElementById('pw3').className = "pw3";
                    }

                    // Set wheelPower var used when spin button is clicked.
                    wheelPower = powerLevel;

                    // Light up the spin button by changing it's source image and adding a clickable class to it.
                    document.getElementById('spin_button').src = "spin_on.png";
                    document.getElementById('spin_button').className = "clickable";
                }
            }

            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            function startSpin()
            {
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false)
                {
                    // Based on the power level selected adjust the number of spins for the wheel, the more times is has
                    // to rotate with the duration of the animation the quicker the wheel spins.
                    if (wheelPower == 1)
                    {
                        theWheel.animation.spins = 3;
                    }
                    else if (wheelPower == 2)
                    {
                        theWheel.animation.spins = 8;
                    }
                    else if (wheelPower == 3)
                    {
                        theWheel.animation.spins = 15;
                    }

                    // Disable the spin button so can't click again while wheel is spinning.
                    document.getElementById('spin_button').src       = "spin_off.png";
                    document.getElementById('spin_button').className = "";

                    // Begin the spin animation by calling startAnimation on the wheel object.
                    theWheel.startAnimation();

                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    wheelSpinning = true;
                }
            }

            // -------------------------------------------------------
            // Function for reset button.
            // -------------------------------------------------------
            function resetWheel()
            {
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.

                document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
                document.getElementById('pw2').className = "";
                document.getElementById('pw3').className = "";

                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }

            // -------------------------------------------------------
            // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
            // note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
            // -------------------------------------------------------
            function alertPrize(indicatedSegment)
            {
                // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
                alert(indicatedSegment.text + ' says Hi');
            }