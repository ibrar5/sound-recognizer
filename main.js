function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    sound_tm = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xsyBDfpVh/model.json", my_model);
}
function my_model(){
    sound_tm.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r = Math.floor( Math.random() * 255) + 1;
        random_b = Math.floor( Math.random() * 255) + 1;
        random_g = Math.floor( Math.random() * 255) + 1;

        document.getElementById("result").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("accuracy").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

        img1 = document.getElementById("a-1");
        img2 = document.getElementById("a-2");
        img3 = document.getElementById("a-3");
        img4 = document.getElementById("a-4");

        if(results[0].label == "screm"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }else if(results[0].label == "clap"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }else if(results[0].label == "snap"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }else{
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}