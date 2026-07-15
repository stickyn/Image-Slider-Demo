/**
 * Variables being used
 * @param leftButton - Will go backwards in the imageArray
 * @param rightButton - Will go forwards in the imageArray
 * @param imageDisplayer - This is the container for the image object, not the image, it's what allows the image to scale to a screen
 * @param imageeSource - Container for the image, which is what will be modifed 
 * @param indexValue - How elements of the array are accessed
 * @param imageArray - How all the images are stored 
 */

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const imageDisplayer = document.getElementById("imageContainer");
const imageeSource = document.getElementById("containerImage");
let indexValue = 0;
let imageArray = ["image1.jpg","image2.jpg","image3.jpg"];

/**
 * W3Schools showcased how to do this: https://www.w3schools.com/js/js_HTMLdom_eventlistener.asp
 */
rightButton.addEventListener("click",function(){ nextImage("right");});
leftButton.addEventListener("click",function(){nextImage("left");});
/**
 * This function, will move forwards or backwards in the slider, but if the indexValue is out of bounds (Over 1 or less than 0, then nothing happens)
 * @param direction - This dictates which direction the slider will move, or if the indexValue will be added or subtracted
 * 
 */
function nextImage(direction)
{
   
    /**
     * If the direction is "right" add one to indexValue, going right, but if it's greater than 1 (maximum array size) don't do anything
     */
    if(direction == "right")
    {
        indexValue++;
        if(indexValue > 1)
        {
            indexValue--;
            console.log(imageArray[indexValue]);
            imageeSource.src = imageArray[indexValue];
        }
        else {
            console.log(imageArray[indexValue]);
            imageeSource.src = imageArray[indexValue];
        }
        
    }
    /**
     * If the direction is "left" subtract one to indexValue, going left, but if it's less than 0 (minimum array size) don't do anything
     */
    else if(direction == "left")
    {
        indexValue--;
        if(indexValue < 0)
        {
            indexValue++;
            console.log(imageArray[indexValue]);
            imageeSource.src = imageArray[indexValue];
        }
        else {
            console.log(imageArray[indexValue]);
            imageeSource.src = imageArray[indexValue];
        }
        
    }
    
    
}

/**
 * This feature, will have the slider switching contaniously, if the array's index is at 2 (maximum) reverse it, so it will start going backwards
 */
setInterval(movingSlider,3000);
function movingSlider() {
    
    if(indexValue == 2)
    {
        imageArray.reverse();
        indexValue--;
        imageeSource.src = imageArray[indexValue];
    }
    else {
        indexValue++;
        imageeSource.src = imageArray[indexValue];
    }
    
    
    
    
}
