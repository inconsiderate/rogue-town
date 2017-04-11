#pragma strict

public var startingHealth : int = 100;
public var currentHealth : int;
public var scoreValue : int = 10;

private var anim : Animator;
var isDead : boolean;

function Awake() {
	anim = GetComponent.<Animator>();
	currentHealth = startingHealth;
}

public function TakeDamage (amount: int) {
	if (isDead) {
		return;
	}
	currentHealth -= amount;
	if(currentHealth <= 0 && !isDead) {
		Death();
	}
}

function Death() {
	isDead = true;
	anim.SetTrigger("Die");
}
