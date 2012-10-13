using UnityEngine;
using System.Collections;

public class TouchSoundManager : MonoBehaviour {
	
	public AudioClip[] soundList;
	
	public void TouchSound(){
	GameObject obj = new GameObject ("sound");
		AudioSource sound = obj.gameObject.AddComponent<AudioSource> ();
		sound.clip = soundList[Random.Range(0,soundList.Length)];
		sound.Play ();
        Destroy (obj,3);
	}
	
	
}
