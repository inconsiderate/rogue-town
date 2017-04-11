#pragma strict

	var player : Transform;
	var nav : UnityEngine.AI.NavMeshAgent;

function Awake () {
	player = GameObject.FindGameObjectWithTag("Player").transform;

	nav = GetComponent.<UnityEngine.AI.NavMeshAgent>();
}

function Update () {
	nav.SetDestination(player.position);
}
