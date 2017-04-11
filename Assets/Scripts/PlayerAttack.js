#pragma strict

private var anim: Animator;
public var damagePerHit : int = 20;
public var timeBetweenAttacks: float = 0.15f;
public var range : float = 100f;
private var playerHealth : PlayerHealth;

private var timer : float;
private var enemyInRange : boolean;
private var shootRay : float;
private var shootHit : float;
private var shootableMask : float;
private var gunParticles : float;
private var gunLine : float;
private var gunLight : float;
private var effectsDisplayTime : float;

function Awake () {
}

function Update() {
	timer += Time.deltaTime;

	if (playerHealth.currentHealth <= 0) {
		anim.SetTrigger("Die");
	}

	if (Input.GetButtonDown("SwingSword") && timer >= timeBetweenAttacks) {
		SwingSword();		
	}
}

function OnTriggerEnter(other: Collider) {
	if (other.gameObject.CompareTag("Enemy")) {
		enemyInRange = true;
	}
}

function OnTriggerExit(other: Collider) {
	if (other.gameObject.CompareTag("Enemy")) {
		enemyInRange = false;
	}
}

function Attack() {
	timer = 0f;
	if (playerHealth.currentHealth > 0) {
		playerHealth.TakeDamage(damagePerHit);
	}
}

function SwingSword() {
	anim.SetTrigger("IsAttacking");
}