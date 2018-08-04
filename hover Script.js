var levelToLoad : String;
var soundhover : AudioClip;
var beep : AudioClip;
var QuitButton : boolean = false;
//variables can entered in the the Unity engine
function OnMouseEnter(){
	audio.PlayOneShot(soundhover);
}
//plays sound on mouse hover
function OnMouseUp(){
	audio.PlayOneShot(beep);
	yield new WaitForSeconds(0.35);
if(QuitButton){
	Application.Quit();
}
// plays a cracking noise that represents the snowlglobe breaking
else{
	Application.LoadLevel(levelToLoad);
}
}
@script RequireComponent(AudioSource)