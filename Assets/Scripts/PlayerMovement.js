#pragma strict

	public var speed: float = 5;
	private var movement: Vector3;
	private var anim: Animator;
	private var playerRigidbody: Rigidbody;
	private var floorMask: int;
	private var camRayLength: float = 100;

function Awake () {
	floorMask = LayerMask.GetMask ("Floor");
	anim = GetComponent.<Animator>();
	playerRigidbody = GetComponent.<Rigidbody>();
}

function FixedUpdate() {
	var h = Input.GetAxisRaw("Horizontal");
	var v = Input.GetAxisRaw("Vertical");
	movement = Vector3(h, 0, v);

	Move(h, v);
	Animating(h, v);
}

function Move(h: float, v: float) {
	movement.Set(h, 0, v);
	movement = movement.normalized * speed * Time.deltaTime;
	transform.Translate (movement, Space.World);

	if (h || v) {
		playerRigidbody.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(movement.normalized), 0.15);	
	}
}

function Animating (h : float, v : float)
{
    var walking : boolean = h != 0f || v != 0f;

    anim.SetBool ("IsWalking", walking);
}
