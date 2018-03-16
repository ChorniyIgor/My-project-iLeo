<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="ru"> <!--<![endif]-->

<head>

	<meta charset="utf-8">

	<title>SEDONA - Главная</title>
	<meta name="description" content="">

	<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="stylesheet" href="css/fontawesome-all.min.css">
	<link rel="stylesheet" href="css/style.css">

</head>

<body>

	<header class="page-header">
	  <nav class="main-nav main-nav--closed main-nav--no-js ">
	    <button class="main-nav__toggle" type="button" >Открить меню</button>

	    
			<?php	include 'header.html';?>
	    <div class="borer-container">

	    <div class="nav__wrapper">
	      <div class="nav__logo ">
	        <a href="index.php">
	            <img src="img/logo.jpg" alt="iLeoo">
	        </a>
	      </div>
	      <nav id="slow_nav">
	      <ul class="main-nav__items" >
	        <li><a href="index.php">Home</a></li>
	        <li><a href="price.php">Preise</a></li>
	        <li  class="list-item__castom">
	          <a href="fachbereiche.php" class="list-item__castom-main">Fachbereiche</a>
	          <ul class="menu5 drop">
	          <li><a href="fachbereiche.php#software-go">Software & IT</a></li>
	          <li><a href="fachbereiche.php#technik-go">Technik</a></li>
	          <li><a href="fachbereiche.php#recht-go">Recht</a></li>
	          <li><a href="fachbereiche.php#medizinisch-go">Medizinisch</a></li>
	          <li><a href="fachbereiche.php#marketing-go">Marketing</a></li>
	          <li><a href="fachbereiche.php#wirtschaft-go">Wirtschaft</a></li>
	          <li><a href="fachbereiche.php#behorden-go">Behörden</a></li>
	          <li><a href="fachbereiche.php#bautechnik-go">Bautechnik</a></li>
	        </ul>
	      </li>
	        <li><a href="about-company.php">Unternehmen</a></li>
	        <li><a href="quality.php">Qualität</a></li>
	        <li><a href="team.php">Unser Team</a></li>
					<li class="active"><span>Contact</span></li>
	      </ul>
	      </nav>
	    </div>

	</div>

	  </nav>

	</header>

<main class="last-page contact">
 <div class="photo">
	 <div class="last-page__header-container">
  		<h1 class="last-page__title">Fachbereiche</h1>
   </div>
 </div>

 <div class="last-page__content last-page__content--noflex">
	 <div class=" castom-title">
		 <h2>Kontaktieren Sie uns</h2>
	</div>
		<ul class="contact-list">
					<li class="contact-form">
					<div class="castom-title">
							<h2>Schreiben Sie uns</h2>
					</div>
						<p>Wir sind immer für Sie da – wir beantworten Ihre Fragen, beraten Sie und unterstützen Sie bei spezifischen Projekten.</p>
						<form class="" action="index.html" method="post" >
							<label class="user_order_name"><input class="row_style" placeholder="Name" name="name" value="" type="text" ></label>
							<label class="user_order_email"><input class="row_style" placeholder="Surname" name="surname" value="" type="text" ></label>
							<textarea name="user_feedback" rows="8" cols="30" placeholder="Anmerkungen"></textarea>
								<input class="contact-list-send-btn" value="Anfrage stellen" name="sendMail" type="submit">
						</form>
				</li>
				<li class="contact-tel">
					<div class="castom-title">
							<h2>Rufen Sie uns an</h2>
					</div>
					<p>Das Team von LanguageWire berät Sie in allen sprachlichen Belangen von Montag bis Freitag von 8:30 Uhr bis 17:00 Uhr.</p>
					<a href="tel:+380684108494">+380 (68)-410-84-94</a>

				</li>
				<li class="contact-address">
					<div class="castom-title">
							<h2>Kommen Sie bitte vorbei</h2>
					</div>
			    <img src="img/photo/company.jpg" alt="office photo">
          <span><i class="fas fa-map-marker-alt"></i>Neuer Wall 50, 20354 Hamburg</span>
				</li>
		</ul>
 </div>
 <div class="contact-map data_site_container">

	 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.355378250001!2d9.987161415901282!3d53.551423280022426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f1bc74e3645%3A0x749023376fd2661a!2zTmV1ZXIgV2FsbCA1MCwgMjAzNTQgSGFtYnVyZywg0J3RltC80LXRh9GH0LjQvdCw!5e0!3m2!1suk!2sua!4v1521232023922" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
 </div>



</main>

	<?php	include 'footer.html';?>





<!-- Зменшеннявисоти хедера-->

<script src="js/small-header.js" charset="utf-8"></script>

<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/particles/slick.js"></script>


<script type="text/javascript">
	jQuery('document').ready(function($){
		$('.about-company-reviews-slider').slick({
					autoplay : true,
					autoplaySpeed : 4000,
					speed: 1000,
					dots : false,
					arrows : true,
		});
	});

</script>











<script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js" defer></script>
<script src="js/form.js" defer></script>



</body>
</html>
