#pragma strict

public var timeBetweenAttacks : float = 1.5f;
public var attackDamage : int = 5;

private var anim: Animator;
private var playerHealth : PlayerHealth;
private var player : GameObject;
private var playerInRange : boolean;
private var timer : float;



function Awake () {
	player = GameObject.FindWithTag("Player");
	playerHealth = player.GetComponent.<PlayerHealth>();
	anim = GetComponent.<Animator>();
}

function OnTriggerEnter(other: Collider) {
	if (other.gameObject == player) {
		playerInRange = true;
	}
}

function OnTriggerExit(other: Collider) {
	if (other.gameObject == player) {
		playerInRange = false;
	}
}

function Update() {
	timer += Time.deltaTime;

	if (timer >= timeBetweenAttacks && playerInRange) {
		Attack();
	}
	if (playerHealth.currentHealth <= 0) {
		anim.SetTrigger("PlayerDead");
	}
}

function Attack() {
	timer = 0f;
	if (playerHealth.currentHealth > 0) {
		playerHealth.TakeDamage(attackDamage);
	}
}