window.currentPage = null;
window.currentLang = 'de';

window.navigate = function(where) {
	var changedDueToLanguage = false;
	window.navigate(where, changedDueToLanguage);
};

window.navigate = function(where, changedDueToLanguage) {

	// update history so that the url bar reflects the currently selected subpage
	if ((window.currentPage != null) && ((window.currentPage != where) || changedDueToLanguage)) {
		window.history.pushState({}, "", "?page=" + where + "&lang=" + window.currentLang);
	}

	window.currentPage = where;

	var main_text = document.getElementById("main_text");
	if (!main_text) {
		return;
	}

	switch (where) {
		case "home":
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
					main_text.innerText =
						"Herzlich willkommen auf der Internetseite des bundesweiten " +
						"Feministischen Streik Bündnis‘. Hier findest du " +
						"verschiedene Informationen unter anderem zu unseren " +
						"Inhalten, wie wir organisiert sind und wie du selbst aktiv " +
						"werden und dich vernetzen kannst. Wir, das ist ein " +
						"Zusammenschluss verschiedener feministischer Streikgruppen " +
						"und -bündnisse, die sich deutschlandweit " +
						"vernetzen und vor Ort jeweils eigenständig arbeiten. " +
						"Gemeinsam kämpfen wir für die Überwindung kapitalistischer " +
						"und patriarchaler Verhältnisse hin zu einer " +
						"Gesellschaft, in der nicht die Sicherung von Profiten, " +
						"sondern gegenseitige Fürsorge im Mittelpunkt steht. " +
						"Der Feministische Streik ist für uns ein wichtiges Mittel " +
						"auf dem Weg dahin - werde Teil davon!";
					break;
			}
			break;
		case "about_us":
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
					main_text.innerText =
						"Wir sind das bundesweite Feministische Streik Bündnis!";
					break;
			}
			break;
		case "fem_streik":
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
					main_text.innerText =
						"Das bundesweite Feministische Streik Bündnis ist ein " +
						"Zusammenschluss verschiedener feministischer Streikgruppen " +
						"und -bündnisse, die sich deutschlandweit " +
						"vernetzen und vor Ort jeweils eigenständig arbeiten. " +
						"Gemeinsam kämpfen wir für die Überwindung kapitalistischer " +
						"und patriarchaler Verhältnisse hin zu einer " +
						"Gesellschaft, in der nicht die Sicherung von Profiten, " +
						"sondern gegenseitige Fürsorge im Mittelpunkt steht. " +
						"Der Feministische Streik ist für uns ein wichtiges Mittel " +
						"auf dem Weg dahin - werde Teil davon!";
					break;
			}
			break;
		case "mitmachen":
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
					main_text.innerText =
						"Kontaktiere uns gern - sobald wir hier Kontaktdaten hinterlegen. ;)";
					break;
			}
			break;
		case "archiv":
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
					main_text.innerHTML =
						"Herausgeber*in:<br>" +
						"A Softer Space DE, Inhaber Tom Moya Schau<br>" +
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
	var lang = params.get("lang");
	if (lang != null) {
		window.currentLang = lang;
	}
	var page = params.get("page");
	if (page != null) {
		window.navigate(page);
	} else {
		window.navigate("home");
	}
};


// start on the home page (start call 1/2, in case the js is loaded last)
window.start();
