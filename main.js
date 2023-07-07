
function Start()
{
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/U5B_thxAt/model.json", modelLoaded);
}

function modelLoaded()
    {
        classifier.classify(gotResult);
    }

    var dog = 0;
    var cat = 0;
    var cow = 0;
    var lion = 0;

    function gotResult(error,results)
    {
        if(error)
        {
            console.error(error);
        }
        else
        {
            console.log(results);

            random_number_r = Math.floor(Math.random()*255) +1;
            random_number_g = Math.floor(Math.random()*255) +1;
            random_number_b = Math.floor(Math.random()*255) +1;

            document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;

            document.getElementById("result_label").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_b+")";

            img = document.getElementById("image");

            if(results[0].label == "Barking")
            {
                img.src = 'Dog.jpeg'; dog = dog+1;
            }
            else if(results[0].label == "Meow")
            {
                img.src = 'Cat.png'; cat = cat+1;
            }
            else if(results[0].label == "Mooing")
            {
                img.src = 'Cow.png'; cow = cow+1;
            }
            else if(results[0].label == "Roarring")
            {
                img.src = 'Lion.jpeg'; lion = lion+1;
            }
            else
            {
                img.src = 'https://cdn.dribbble.com/users/1614722/screenshots/4419914/media/7dbf0c36c97e771824e736dc9e3d0989.gif';
            }
        }
    }


