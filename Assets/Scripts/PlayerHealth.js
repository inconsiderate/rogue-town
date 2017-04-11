#pragma strict

public var startingHealth : int = 100;
public var currentHealth : int;
public var healthSlider : UnityEngine.UI.Slider;

private var anim : Animator;
private var playerAudio : AudioSource; 
private var playerMovement : PlayerMovement;
var isDead : boolean;

function Awake() {
	anim = GetComponent.<Animator>();
	playerAudio = GetComponent.<AudioSource>();
	playerMovement = GetComponent.<PlayerMovement>();
	currentHealth = startingHealth;
}

public function TakeDamage (amount: int) {
	currentHealth -= amount;
	healthSlider.value = currentHealth;
	anim.SetTrigger("Hurt");
	playerAudio.Play();

	if(currentHealth <= 0 && !isDead) {
		Death();
	}
}

function Death() {
	isDead = true;

	anim.SetTrigger("Die");
	playerMovement.enabled = false;
}

