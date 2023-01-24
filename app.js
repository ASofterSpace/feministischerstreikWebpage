window.currentPage = null;
window.currentLang = 'de';

window.navigate = function(where) {
	var changedDueToLanguage = false;
	window.navigate(where, changedDueToLanguage);
};

window.navigate = function(where, changedDueToLanguage) {

	// update history so that the url bar reflects the currently selected subpage
	if ((window.currentPage != null) && ((window.currentPage != where) || changedDueToLanguage)) {
		window.history.pushState({}, "", "?p=" + where + "&l=" + window.currentLang);
	}

	window.currentPage = where;

	var main_text = document.getElementById("main_text");
	if (!main_text) {
		return;
	}

	var onMainpage = false;
	var title = "";
	var heroImg = "hero";

	switch (where) {

		case "home":
			onMainpage = true;
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This is the main landing page. It has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					main_text.innerHTML =
						"<div class='quote'>„Wenn wir streiken, steht die Welt still!“</div>" +
						"Herzlich willkommen auf der Internetseite des bundesweiten Feministischen " +
						"Streik Bündnis'. Hier findest du verschiedene Informationen unter anderem " +
						"zu unseren Inhalten, wie wir organisiert sind und wie du selbst aktiv werden " +
						"und dich vernetzen kannst.<br><br>" +
						"Wir, das ist ein Zusammenschluss verschiedener feministischer Streikgruppen " +
						"und -bündnisse, die sich deutschlandweit vernetzen und vor Ort jeweils " +
						"eigenständig arbeiten. Wir sind diejenigen, die den Großteil an Sorgearbeit " +
						"in der Gesellschaft leisten: Kindererziehung, Pflege, Soziale Arbeit, Sexarbeit, " +
						"emotionale Fürsorge und Hausarbeit; egal ob bezahlt im Beruf oder unbezahlt " +
						"zuhause und im Ehrenamt. Dabei erleben wir, dass die Bedingungen für diese " +
						"Arbeiten immer schlechter werden und wir immer näher an unsere Belastungsgrenzen " +
						"kommen, doch statt eines Ausgleichs bekommen wir wenig Lohn, sind häufiger von " +
						"Altersarmut betroffen und Gewalt gegen uns verschärft sich fortwährend.<br><br>" +
						"Gemeinsam kämpfen wir für die Überwindung kapitalistischer und patriarchaler " +
						"Verhältnisse hin zu einer Gesellschaft, in der nicht die Sicherung von Profiten, " +
						"sondern gegenseitige Fürsorge im Mittelpunkt steht.<br>" +
						"Der Feministische Streik ist für uns ein wichtiges Mittel auf dem Weg dahin - " +
						"werde Teil davon!";
					break;
			}
			break;

		case "about_us":
			heroImg = "section_aboutus";
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Über uns";
					main_text.innerHTML =
						"Wir sind ein Zusammenschluss verschiedener feministischer Streikgruppen " +
						"und -bündnisse, die sich deutschlandweit vernetzen und vor Ort jeweils " +
						"eigenständig arbeiten. Wir sind ein Zusammenschluss aus verschiedenen " +
						"feministischen Gruppen in ganz Deutschland, die sich auf den feministischen " +
						"Streik als gemeinsames Mittel zur Durchsetzung politischer Forderungen und " +
						"einer langfristigen Organisierung von unten fokussiert.<br><br>" +
						"Die bundesweite Vernetzung ist in verschiedenen Komissionen organisiert. " +
						"Zum Beispiel für Terminkoordination, Mails, Design und Website. " +
						"Kurzfristig kommen wir auch in themenspezifischen Arbeitsgruppen zusammen. " +
						"Wir treffen uns sowohl online, als auch in Präsenz. Wir diskutieren, entwickeln " +
						"Strategien, unterstützen uns in unseren Aufbauprozessen und ziehen Kraft aus " +
						"unserer gemeinsamen Bewegung. Zwischen uns herrscht nicht in allen inhaltlichen " +
						"und politischen Punkten Einigkeit - weshalb ihr vielleicht auch in Teilen auf " +
						"unterschiedliche Begriffe oder Bezugspunkte stoßt.<br><br>" +
						"Was wir jedoch gemeinsam haben ist: Die bundesweite Vernetzung will eine gemeinsame " +
						"Strategie zur (Re-)Etablierung des politischen Streiks in Deutschland entwickeln, " +
						"der dabei bezahlte und unbezahlte Sorgearbeit und alle gesellschaftlichen Bereiche " +
						"in den Frauen, trans*, inter* und nicht-binäre Personen maßgeblich tätig sind in " +
						"den Fokus rückt. Um als feministische Linke an Ausdruckskraft und Stärke zu gewinnen, " +
						"sind wir der Überzeugung, dass wir eine langfristige und nachhaltige Organisierung " +
						"benötigen, die über Städte und schlussendlich über nationale Grenzen hinweg agieren " +
						"muss.<br><br>" +
						"Der 8. März ist bisher unser gemeinsamer zentraler Aktionstag, an dem wir Menschen in " +
						"bezahlter und unbezahlter Care-Arbeit zusammenbringen, den öffentlichen Raum mit " +
						"feministischen Themen besetzen und kollektiv bundesweit und international sichtbar " +
						"sein wollen. Über das Jahr hinweg organisieren wir gemeinsame Aktionen, unterstützen " +
						"solidarisch Tarifstreiks und andere progressive Kämpfe. Wir schließen uns dabei mit " +
						"vielen anderen Akteur*innen auf lokaler und bundesweiter Ebene zusammen, arbeiten in " +
						"oder mit Gewerkschaften, sozialpolitischen, klimapolitischen, antirassistischen und " +
						"vielen weiteren Initiativen.<br><br>" +
						"Alle Gruppen und Initiativen, die sich der Idee eines feministischen Streiks verbunden " +
						"fühlen und aktiv daran mitarbeiten wollen, sind herzlich eingeladen sich anzuschließen.";
					break;
			}
			break;

		case "fem_streik":
			heroImg = "section_femstreik";
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Informationen zum Feministischen Streik";
					main_text.innerHTML =
						"Ein feministischer Streik verbindet sowohl ökonomische " +
						"als auch politische Anliegen. Wie bei einem klassischen gewerkschaftlichen " +
						"Streik legen wir beim feministischen Streik unsere Arbeit nieder – " +
						"aber erzeugen dabei nicht nur ökonomischen, sondern eben auch " +
						"gesellschaftlichen Druck. Wir kämpfen dann nicht nur für eine konkrete " +
						"Verbesserung unserer Arbeitsverhältnisse, sondern auch für eine tiefgreifende " +
						"Veränderung unserer Lebensumstände: gegen Gewalt an Frauen, trans*, inter* " +
						"und nicht-binären Personen, binäre Geschlechterrollen und neoliberale Sparpolitik. " +
						"Dafür, dass reproduktive Arbeiten einen wichtigeren Stellenwert in der Gesellschaft " +
						"erhalten und für alle durch alle gesorgt wird.<br><br>" +
						"Streik heißt Verweigerung! Im feministischen Streik verweigern wir uns dabei aber nicht " +
						"nur der Ausführung unserer abgewerteten und missachteten Arbeit, sondern auch anderer " +
						"gesellschaftlicher Zwänge - und das erfordert von uns das Erproben von Utopien. " +
						"Wenn wir die Individualisierung von Sorgearbeit bestreiken, erfordert das unweigerlich " +
						"kollektivierte Formen der Zubereitung von Mahlzeiten, der Pflege und Kinderbetreuung. " +
						"Wir müssen neue Arten von Beziehungsarbeit erlernen, auch über gesellschaftliche " +
						"Spaltungslinien hinweg- und das schon im Hier und Jetzt.<br><br>" +
						"Doch wir dürfen nicht dem Trugschluss verfallen, dass alles passiere allein durch " +
						"das Niederlegen von Arbeit. Stattdessen müssen wir das Üben dieser Utopien als Teil " +
						"unserer Praxis begreifen, anstatt es in eine ferne, bessere Zukunft zu verlagern. " +
						"Nur wenn wir alle gesellschaftlichen und kollektiven Dimensionen bei diesem Kampf " +
						"mitbedenken, kann der feministische Streik als Mittel seine vielen Facetten entfalten " +
						"und uns zum Erfolg führen!";
					break;
			}
			break;

		case "mitmachen":
			heroImg = "section_mitmachen";
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Mitmachen";
					main_text.innerText =
						"Du magst bei uns mitmachen? Ja super - wir freuen uns auf dich!";
					break;
			}
			break;

		case "kontakt":
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Kontakt";
					main_text.innerText =
						"Kontaktiere uns gern - sobald wir hier Kontaktdaten hinterlegen. ;)";
					break;
			}
			break;

		case "archiv":
			heroImg = "section_archiv";
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Archiv";
					main_text.innerText =
						"Unser Archiv ist aktuell noch leer - aber das ändert sich bald!";
					break;
			}
			break;

		case "impressum":
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Impressum";
					main_text.innerHTML =
						"Herausgeber*in:<br>" +
						"A Softer Space DE, Inhaber*in Moya Schiller<br>" +
						"Bad Nauheimer Str. 4<br>" +
						"64289 Darmstadt<br>" +
						"Deutschland<br>" +
						"<br>" +
						"Kontakt:<br>" +
						"<a href='mailto:moya@asofterspace.com'>moya@asofterspace.com</a>";
					break;
			}
			break;

		case "datenschutz":
			switch (window.currentLang) {
				case 'en':
					main_text.innerText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					main_text.innerText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Datenschutz";
					main_text.innerText =
						"Wir nutzen keinerlei Cookies, verwenden keine Dienste Dritter, " +
						"loggen keine Daten, und haben daher schlichtweg keine Daten von Ihnen. " +
						"Glück gehabt!";
					break;
			}
			break;

		default:
			console.log("Ooops - navigating to a page that does not exist: '" + where + "'!");
			break;
	}

	if (onMainpage) {
		document.getElementById("hero_container").style.height = "32vw";
		document.getElementById("hero_logo_img").style.display = "block";
		document.getElementById("hero_text_mainpage_top").style.display = "block";
		document.getElementById("hero_text_mainpage_bottom").style.display = "block";
		document.getElementById("hero_text_subpages").style.display = "none";
	} else {
		document.getElementById("hero_container").style.height = "24vw";
		document.getElementById("hero_logo_img").style.display = "none";
		document.getElementById("hero_text_mainpage_top").style.display = "none";
		document.getElementById("hero_text_mainpage_bottom").style.display = "none";
		document.getElementById("hero_text_subpages").innerText = title;
		document.getElementById("hero_text_subpages").style.display = "block";
	}
	document.getElementById("hero_img").src = "./pictures/" + heroImg + ".jpg";

	window.scrollTo(0, 0);
};

window.selectLang = function(lang) {
	if (window.currentLang != lang) {
		window.currentLang = lang;
		var changedDueToLanguage = true;
		window.navigate(window.currentPage, changedDueToLanguage);
	}
};

window.start = function() {
	var params = new URLSearchParams(location.search);
	var lang = params.get("l");
	if (lang == null) {
		lang = params.get("lang");
	}
	if (lang != null) {
		window.currentLang = lang;
	}
	var page = params.get("p");
	if (page == null) {
		page = params.get("page");
	}
	if (page != null) {
		window.navigate(page);
	} else {
		window.navigate("home");
	}
};


// start on the home page (start call 1/2, in case the js is loaded last)
window.start();
