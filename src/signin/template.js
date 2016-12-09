var yo = require( 'yo-yo' );
var landing = require( '../landing' );

var signInForm = yo`<div class="col s12 m7">
	<div class="row">
		<div class="signup-box">
			<h1 class="platzigram">Platzigram</h1>
			<form class="signup-form">
				<h2>Inicia sesión para ver fotos de tus amigos estudiando en Platzi</h2>
				<div class="section">
					<a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
					<a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input type="email" name="email" placeholder="Correo electrónico" />
					<input type="password" name="password" placeholder="Contraseña" />
					<button class="btn waves-effect waves-light btn-signup" type="submit">Inicia sesión</button>
				</div>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="login-box">
			¿No tienes una cuenta? <a href="/signup">Regístrate</a>
		</div>
	</div>
</div>`;

module.exports = landing( signInForm )