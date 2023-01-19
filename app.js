window.navigate = function(where) {

	var main_text = document.getElementById("main_text");
	if (!main_text) {
		return;
	}

	switch (where) {
		case "home":
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
		case "about_us":
			main_text.innerText = "Wir sind das bundesweite Feministische Streik Bündnis!";
			break;
		case "fem_streik":
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
		case "mitmachen":
			main_text.innerText = "Du magst bei uns mitmachen? Ja super - wir freuen uns auf dich!";
			break;
		case "kontakt":
			main_text.innerText = "Kontaktiere uns gern - sobald wir hier Kontaktdaten hinterlegen. ;)";
			break;
		case "archiv":
			main_text.innerText = "Unser Archiv ist aktuell noch leer - aber das ändert sich bald!";
			break;
		case "impressum":
			main_text.innerHTML = "Herausgeber:<br>" +
				"A Softer Space DE, Inhaber Tom Moya Schau<br>" +
				"Bad Nauheimer Str. 4<br>" +
				"64289 Darmstadt<br>" +
				"Deutschland<br>" +
				"<br>" +
				"Kontakt:<br>" +
				"<a href='mailto:moya@asofterspace.com'>moya@asofterspace.com</a>";
			break;
		case "datenschutz":
			main_text.innerText =
				"Wir nutzen keinerlei Cookies, verwenden keine Dienste Dritter, " +
				"loggen keine Daten, und haben daher schlichtweg keine Daten von Ihnen. " +
				"Glück gehabt!";
			break;
		default:
			console.log("Ooops - navigating to a page that does not exist: '" + where + "'!");
			break;
	}

	window.scrollTo(0, 0);
};

// start on the home page (start call 1/2, in case the js is loaded last)
window.navigate("home");
