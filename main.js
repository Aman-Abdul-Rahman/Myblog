function preload()
    {

      clown_nose=loadImage('https://i.postimg.cc/vmqzYjMR/clownnose.png'); 
    }

    nose_x=0;
    nose_y=0;

    function setup()
    {
        canvas=createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300,300);
        video.hide();

        poseNet=ml5.poseNet(video,modelloaded);
        poseNet.on('pose',gotPoses);
    }

    function draw()
    {
      image(video,0,0,300,300);
      /*
      circle(nose_x,nose_y,20);
      fill(250,0,0);
      stroke(250,0,0);*/
      image(clown_nose,nose_x,nose_y,30,30);
    }

    function modelloaded()
    {
      console.log('poseNet is initialized');
    }

    function gotPoses(results)
    {
      if(results.length>0)
      {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-10;
        nose_y=results[0].pose.nose.y-10;
      }
    }

    function take_snapshot()
    {
      save('Filtered_photo.png');
    }
