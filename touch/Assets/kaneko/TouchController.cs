using UnityEngine;
using System.Collections;

public class TouchController : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	void Update(){
			Mouth ();
	}
	
	
	public GameObject[] list;
	
	private void Mouth ()
	{
	
		if(Input.GetMouseButtonDown(0)){
			Vector3 vec= Input.mousePosition	; 
			Debug.Log("x"+vec.x);
			Debug.Log("y"+vec.y);
		
			vec.z=50;
			vec = Camera.main.ScreenToWorldPoint (vec);
				
			Debug.Log("w:x"+vec.x);
			Debug.Log("w:y"+vec.y);
			Debug.Log("w:z"+vec.z);
			
			
			
			int random = Random.Range(0,list.Length);			
			GameObject gameObject = (GameObject)Instantiate (list[random], vec, Quaternion.identity);	
			TouchSoundManager sound = GetComponent<TouchSoundManager>();
			sound.SendMessage("TouchSound");
		}

					
		
	}
}
