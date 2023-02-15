window.currentPage = null;
window.currentLang = 'de';

window.data_8m = {
	map: {
		width: 1689,
		height: 2232,
		locations: {
			"Berlin": {
				"title": "Feministischer Streik Berlin",
				"short": "ber",
				"x": 1313,
				"y": 690,
				"mail": "feministischer-streik-berlin@systemli.org",
				"insta": "feministischer_streik_berlin",
				"facebook": "FeministischerStreikBerlin",
				"twitter": "FemStreik",
			},
			"Hannover": {
				"title": "Feministischer Rat Hannover",
				"short": "han",
				"x": 720,
				"y": 762,
				"mail": "feministisch_streiken@riseup.net",
				"insta": "femrat_hannover",
				"facebook": "FeministischerRatHannover",
			},
			"Oberhausen (NRW)": {
				"title": "Frauen-Plenum Oberhausen",
				"short": "ohn",
				"x": 174,
				"y": 985,
				"web": "frauen-plenum-oberhausen.de",
				"mail": "info@frauen-plenum-ob.de",
			},
			"Leipzig": {
				"title": "8. März Bündnis Leipzig",
				"short": "lzg",
				"x": 1151,
				"y": 1058,
				"mail": "streik8m_leipzig@riseup.net",
				"insta": "8m_leipzig",
			},
			"Kassel": {
				"title": "Arbeitsgruppe feministischer Streik Kassel",
				"short": "kas",
				"x": 652,
				"y": 1076,
				"mail": "feministischerstreikks@riseup.net",
			},
			"Köln": {
				"title": "8M Bündnis Köln",
				"short": "cgn",
				"x": 184,
				"y": 1156,
				"mail": "8mcgn@riseup.net",
				"insta": "8m_buendnis_koeln",
			},
			"Frankfurt am Main": {
				"title": "Feministisches Streikkollektiv Frankfurt",
				"short": "ffm",
				"x": 489,
				"y": 1413,
				"web": "fstreikfrankfurt.noblogs.org",
				"mail": "fstreik_ffm@riseup.net",
				"insta": "Fstreik_FFM",
				"facebook": "FstreikFFM",
			},
			"Darmstadt": {
				"title": "Feministischer Streik Darmstadt",
				"short": "dar",
				"x": 495,
				"y": 1484,
				"insta": "feministischer_streik_da",
			},
			"Nürnberg": {
				"title": "FLINTA* Komitee für einen feministischen Streik in Nürnberg",
				"short": "nur",
				"x": 936,
				"y": 1585,
				"mail": "fq-streik-nbg@riseup.net",
			},
			"Stuttgart": {
				"title": "Aktionsbündnis 8. März Stuttgart",
				"short": "stg",
				"x": 570,
				"y": 1763,
				"web": "aktionfrauen.wordpress.com",
				"mail": "aktion-frauen@riseup.net",
				"insta": "aktion_frauen",
			},
			"Augsburg": {
				"title": "Feministisches Streikkomitee Augsburg (F*Streik Aux)",
				"short": "aux",
				"x": 913,
				"y": 1944,
				"web": "frauenstreikaux.blackblogs.org",
				"mail": "f-streik-aux@riseup.net",
				"insta": "feministischer.streik_aux",
				"facebook": "Feministisches Streikkomitee Augsburg",
			},
			"München": {
				"title": "Feministischer Streik München",
				"short": "mun",
				"x": 1006,
				"y": 1990,
				"mail": "frauenstreik.muenchen@gmail.com",
				"insta": "feministischer.streik_muenchen",
			},
			"Freiburg": {
				"title": "Feministischer & Frauenstreik Freiburg",
				"short": "fbg",
				"x": 288,
				"y": 1991,
				"web": "www.fstreik-freiburg.de",
				"mail": "fstreik-freiburg@riseup.net",
				"insta": "feministundfrauenstreikfr",
			},
		}
	}
};

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
	var largeText = null;

	switch (where) {

		case "home":
			onMainpage = true;
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This is the main landing page. It has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					main_text.innerHTML =
						"<div class='quote'>„Wenn wir streiken, steht die Welt still!“</div>" +
						"<p class='large'>Herzlich willkommen auf der Internetseite des bundesweiten Feministischen " +
						"Streik Bündnis'. Hier findest du verschiedene Informationen unter anderem " +
						"zu unseren Inhalten, wie wir organisiert sind und wie du selbst aktiv werden " +
						"und dich vernetzen kannst.</p>" +
						"<p class='large'>Wir, das ist ein Zusammenschluss verschiedener feministischer Streikgruppen " +
						"und -bündnisse, die sich deutschlandweit vernetzen und vor Ort jeweils " +
						"eigenständig arbeiten. Wir sind diejenigen, die den Großteil an Sorgearbeit " +
						"in der Gesellschaft leisten: Kindererziehung, Pflege, Soziale Arbeit, Sexarbeit, " +
						"emotionale Fürsorge und Hausarbeit; egal ob bezahlt im Beruf oder unbezahlt " +
						"zuhause und im Ehrenamt. Dabei erleben wir, dass die Bedingungen für diese " +
						"Arbeiten immer schlechter werden und wir immer näher an unsere Belastungsgrenzen " +
						"kommen, doch statt eines Ausgleichs bekommen wir wenig Lohn, sind häufiger von " +
						"Altersarmut betroffen und Gewalt gegen uns verschärft sich fortwährend.</p>" +
						"<p class='large'>Gemeinsam kämpfen wir für die Überwindung kapitalistischer und patriarchaler " +
						"Verhältnisse hin zu einer Gesellschaft, in der nicht die Sicherung von Profiten, " +
						"sondern gegenseitige Fürsorge im Mittelpunkt steht.<br>" +
						"Der Feministische Streik ist für uns ein wichtiges Mittel auf dem Weg dahin - " +
						"werde Teil davon!</p>";
					break;
			}
			break;

		case "about_us":
			heroImg = "section_aboutus";
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Über uns";
					largeText =
						"Wir sind ein Zusammenschluss verschiedener feministischer Streikgruppen " +
						"und -bündnisse, die sich deutschlandweit vernetzen und vor Ort jeweils " +
						"eigenständig arbeiten. Wir sind ein Zusammenschluss aus verschiedenen " +
						"feministischen Gruppen in ganz Deutschland, die sich auf den feministischen " +
						"Streik als gemeinsames Mittel zur Durchsetzung politischer Forderungen und " +
						"einer langfristigen Organisierung von unten fokussiert.\n" +
						"Die bundesweite Vernetzung ist in verschiedenen Komissionen organisiert. " +
						"Zum Beispiel für Terminkoordination, Mails, Design und Website. " +
						"Kurzfristig kommen wir auch in themenspezifischen Arbeitsgruppen zusammen. " +
						"Wir treffen uns sowohl online, als auch in Präsenz. Wir diskutieren, entwickeln " +
						"Strategien, unterstützen uns in unseren Aufbauprozessen und ziehen Kraft aus " +
						"unserer gemeinsamen Bewegung. Zwischen uns herrscht nicht in allen inhaltlichen " +
						"und politischen Punkten Einigkeit - weshalb ihr vielleicht auch in Teilen auf " +
						"unterschiedliche Begriffe oder Bezugspunkte stoßt.\n" +
						"Was wir jedoch gemeinsam haben ist: Die bundesweite Vernetzung will eine gemeinsame " +
						"Strategie zur (Re-)Etablierung des politischen Streiks in Deutschland entwickeln, " +
						"der dabei bezahlte und unbezahlte Sorgearbeit und alle gesellschaftlichen Bereiche " +
						"in den Frauen, trans*, inter* und nicht-binäre Personen maßgeblich tätig sind in " +
						"den Fokus rückt. Um als feministische Linke an Ausdruckskraft und Stärke zu gewinnen, " +
						"sind wir der Überzeugung, dass wir eine langfristige und nachhaltige Organisierung " +
						"benötigen, die über Städte und schlussendlich über nationale Grenzen hinweg agieren " +
						"muss.\n" +
						"Der 8. März ist bisher unser gemeinsamer zentraler Aktionstag, an dem wir Menschen in " +
						"bezahlter und unbezahlter Care-Arbeit zusammenbringen, den öffentlichen Raum mit " +
						"feministischen Themen besetzen und kollektiv bundesweit und international sichtbar " +
						"sein wollen. Über das Jahr hinweg organisieren wir gemeinsame Aktionen, unterstützen " +
						"solidarisch Tarifstreiks und andere progressive Kämpfe. Wir schließen uns dabei mit " +
						"vielen anderen Akteur*innen auf lokaler und bundesweiter Ebene zusammen, arbeiten in " +
						"oder mit Gewerkschaften, sozialpolitischen, klimapolitischen, antirassistischen und " +
						"vielen weiteren Initiativen.\n" +
						"Alle Gruppen und Initiativen, die sich der Idee eines feministischen Streiks verbunden " +
						"fühlen und aktiv daran mitarbeiten wollen, sind herzlich eingeladen sich anzuschließen.";
					break;
			}
			break;

		case "fem_streik":
			heroImg = "section_femstreik";
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Informationen zum Feministischen Streik";
					largeText =
						"Ein feministischer Streik verbindet sowohl ökonomische " +
						"als auch politische Anliegen. Wie bei einem klassischen gewerkschaftlichen " +
						"Streik legen wir beim feministischen Streik unsere Arbeit nieder – " +
						"aber erzeugen dabei nicht nur ökonomischen, sondern eben auch " +
						"gesellschaftlichen Druck. Wir kämpfen dann nicht nur für eine konkrete " +
						"Verbesserung unserer Arbeitsverhältnisse, sondern auch für eine tiefgreifende " +
						"Veränderung unserer Lebensumstände: gegen Gewalt an Frauen, trans*, inter* " +
						"und nicht-binären Personen, binäre Geschlechterrollen und neoliberale Sparpolitik. " +
						"Dafür, dass reproduktive Arbeiten einen wichtigeren Stellenwert in der Gesellschaft " +
						"erhalten und für alle durch alle gesorgt wird.\n" +
						"Streik heißt Verweigerung! Im feministischen Streik verweigern wir uns dabei aber nicht " +
						"nur der Ausführung unserer abgewerteten und missachteten Arbeit, sondern auch anderer " +
						"gesellschaftlicher Zwänge - und das erfordert von uns das Erproben von Utopien. " +
						"Wenn wir die Individualisierung von Sorgearbeit bestreiken, erfordert das unweigerlich " +
						"kollektivierte Formen der Zubereitung von Mahlzeiten, der Pflege und Kinderbetreuung. " +
						"Wir müssen neue Arten von Beziehungsarbeit erlernen, auch über gesellschaftliche " +
						"Spaltungslinien hinweg- und das schon im Hier und Jetzt.\n" +
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
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Mitmachen";

					var html =
						"<img id='map' alt='Landkarte mit den verschiedenen Lokalgruppen' src='pictures/map.png' />" +
						"<div id='map-hover-box'></div>" +
						"<p>An diesen Orten kannst du mitmachen:</p>";

					for (const locName in window.data_8m.map.locations) {
						var loc = window.data_8m.map.locations[locName];
						html += "<h2 id='location-" + loc.short + "'>" + loc.title + "</h2>";
						html += "<p>";
						if (loc.web) {
							html += "Web: <a href='https://" + loc.web + "/' target='_blank'>" + loc.web + "</a><br>";
						}
						if (loc.mail) {
							html += "Mail: <a href='mailto:" + loc.mail + "'>" + loc.mail + "</a><br>";
						}
						if (loc.insta) {
							html += "Instagram: <a href='https://www.instagram.com/" + loc.insta + "/' target='_blank'>" + loc.insta + "</a><br>";
						}
						if (loc.facebook) {
							html += "Facebook: <a href='https://www.facebook.com/" + loc.facebook + "' target='_blank'>" + loc.facebook + "</a><br>";
						}
						if (loc.twitter) {
							html += "Twitter: <a href='https://twitter.com/" + loc.twitter + "' target='_blank'>" + loc.twitter + "</a><br>";
						}
						html = html.substring(0, html.length - 4);
						html += "</p>";
					}

					main_text.innerHTML = html;

					document.getElementById('map').addEventListener('mousemove', (e) => {
						var map = document.getElementById('map');
						var f = window.data_8m.map.width / map.clientWidth;
						var minDistLoc = null;
						// this is the minimum distance, if the cursor is further away, nothing is shown
						var minDistance = 60*60;

						for (const locName in window.data_8m.map.locations) {
							var loc = window.data_8m.map.locations[locName];
							var distX = (loc.x + 15) - f*e.offsetX;
							var distY = (loc.y - 40) - f*e.offsetY;
							var distance = distX*distX + distY*distY;
							if (distance < minDistance) {
								minDistance = distance;
								minDistLoc = loc;
							}
						}

						if (minDistLoc != null) {
							var loc = minDistLoc;
							var hoverBox = document.getElementById('map-hover-box');
							var html = loc.title;
							html += "<p style='margin-bottom: 0;'>";
							if (loc.web) {
								html += "Web: <a href='https://" + loc.web + "/' target='_blank'>" + loc.web + "</a><br>";
							}
							if (loc.mail) {
								html += "Mail: <a href='mailto:" + loc.mail + "'>" + loc.mail + "</a><br>";
							}
							if (loc.insta) {
								html += "Instagram: <a href='https://www.instagram.com/" + loc.insta + "/' target='_blank'>" + loc.insta + "</a><br>";
							}
							if (loc.facebook) {
								html += "Facebook: <a href='https://www.facebook.com/" + loc.facebook + "' target='_blank'>" + loc.facebook + "</a><br>";
							}
							if (loc.twitter) {
								html += "Twitter: <a href='https://twitter.com/" + loc.twitter + "' target='_blank'>" + loc.twitter + "</a><br>";
							}
							html = html.substring(0, html.length - 4);
							html += "</p>";
							hoverBox.innerHTML = html;
							if (loc.x > window.data_8m.map.width / 2) {
								hoverBox.style.left = "unset";
								hoverBox.style.right = ((window.data_8m.map.width + 50 - loc.x) / f) + "px";
							} else {
								hoverBox.style.left = ((loc.x + 100) / f) + "px";
								hoverBox.style.right = "unset";
							}
							hoverBox.style.top = ((loc.y - 100) / f) + "px";
							hoverBox.style.display = "block";
						}
					});
					break;
			}
			break;

		case "kontakt":
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Kontakt";
					main_text.innerHTML =
						"<p class='large'>Bei Interesse und Fragen, meldet euch bei uns:<br>" +
						"<a href='mailto:fstreik_bundesweit@riseup.net'>fstreik_bundesweit@riseup.net</a></p>";
					break;
			}
			break;

		case "archiv":
			heroImg = "section_archiv";
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Archiv";
					main_text.innerHTML =
						"<p class='large'>In unserem Archiv könnt ihr vergangene Aufrufe und Aktionen " +
						"nachlesen.</p>" +
						"<h2>Aufruf 2023</h2>" +
						"<p>Ni una menos – nicht eine Einzige weniger! Mit diesem Slogan gegen patriarchale Gewalt " +
						"und Femizide hat 2015 die feministische Streikbewegung Argentiniens die Welt entflammt. In " +
						"wenigen Jahren wuchs diese Bewegung rasant an. Der Slogan „Jin Jiyan Azadi“ (Frauen Leben " +
						"Freiheit) der revolutionären kurdischen Bewegung hallt aktuell in der ganzen Welt wieder. Von " +
						"Lateinamerika über Rojava (Nord-Ost-Syrien) und Teheran bis nach Europa stehen Frauen und " +
						"Queers/FLINTAs auf und rebellieren. " +
						"Gemeinsam kämpfen sie für eine Gesellschaft, in der ein " +
						"gutes Leben möglich ist.</p>" +
						"<p><a onclick='navigate(\"2023_8m_aufruf\")'>Weiterlesen...</a></p>";
						// TODO :: vielleicht ältere Aufrufe mit einpflegen, wie bspw.:
						// https://web.archive.org/web/20210310213128/https://frauenstreik.org/aufruf-2018/
					break;
			}
			break;

		case "2023_8m_aufruf":
			heroImg = "section_2023_8m_aufruf";
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Aufruf 2023";
					main_text.innerHTML =
						"<h2 class='button text_white'>DIE KRISEN STECKEN IM SYSTEM - FEMINISTISCH STREIKEN - WELTWEIT</h2>" +
						"<p>Ni una menos – nicht eine Einzige weniger! Mit diesem Slogan gegen patriarchale Gewalt " +
						"und Femizide hat 2015 die feministische Streikbewegung Argentiniens die Welt entflammt. In " +
						"wenigen Jahren wuchs diese Bewegung rasant an. Der Slogan „Jin Jiyan Azadi“ (Frauen Leben " +
						"Freiheit) der revolutionären kurdischen Bewegung hallt aktuell in der ganzen Welt wieder. Von " +
						"Lateinamerika über Rojava (Nord-Ost-Syrien) und Teheran bis nach Europa stehen Frauen und " +
						"Queers/<a class='text_black' href='#footnote-1'>FLINTAs<sup>1</sup></a> auf und rebellieren. " +
						"Gemeinsam kämpfen sie für eine Gesellschaft, in der ein " +
						"gutes Leben möglich ist.</p>" +
						"<p>Die gesellschaftlichen Widersprüche spitzen sich massiv zu: Weltweit finden kriegerische " +
						"Auseinandersetzung im Interesse der Herrschenden statt und ein Ende der Klimazerstörung ist " +
						"auch nicht in Sicht. Momentan trifft uns Lohnabhängige die Wirtschaftskrise hart: Die Inflation ist " +
						"bereits auf eine Rekordhöhe von über 10% gestiegen. Die Preise für Lebensmittel gehen steil " +
						"nach oben, mehr als zwei Millionen Menschen müssen Essensspenden von der Tafel holen. Die " +
						"Gaspreise haben sich zeitweise verdreifacht. Und auf der anderen Seite fahren Konzerne dicke " +
						"Profite ein: Lebensmittel- und Energiekonzerne machen trotz Krise Milliarden an Gewinnen. Es " +
						"findet eine spürbare Umverteilung des gesellschaftlichen Reichtums von unten nach oben statt.</p>" +
						"<p>Es hat System, dass sich diese Krise auf Frauen und Queers/FLINTAs härter auswirkt: Von niedrigen " +
						"Löhnen sind vor allem wir betroffen. Viele von uns arbeiten gerade mal für den Mindestlohn oder " +
						"nicht viel mehr - im Alter wartet auf uns die Armut. Einsparungen im sozialstaatlichen Bereich " +
						"werden vor allem für Frauen und Queers/FLINTAs ein Problem werden, denn diese sind auf diese " +
						"Angebote besonders angewiesen. Und gerade gegen die erstarkende Rechte wird es darum " +
						"gehen müssen schon erkämpfte Errungenschaften zu verteidigen. Hinzu kommt die Ausbeutung " +
						"und Unterdrückung im Privaten: Wir leisten einen Großteil der unbezahlten Haus- und Sorgearbeit. " +
						"Und Gewalt gegen Frauen und Queers/FLINTAs steigt seit Jahren.</p>" +
						"<p>All das sind wichtige Gründe, am 8. März, dem internationalen feministischen Kampftag/" +
						"Frauenkampftag auf die Straße zu gehen.</p>" +
						"<h2>Tarifverhandlungen im öffentlichen Dienst: Gemeinsam feministisch streiken!</h2>" +
						"<p>Konkret werden unsere Kämpfe zum Beispiel in Tarifrunden. 2023 wird in der Tarifrunde des " +
						"öffentlichen Dienstes um Geld verhandelt, welches die Beschäftigten dringend benötigen. Auch " +
						"in der Pflege wird es wieder Arbeitskämpfe geben. Gerade in Krisenzeiten sind diese Kämpfe " +
						"besonders wichtig um Existenzen zu sichern. Es geht um die Situation der Beschäftigten, um " +
						"vernünftige Arbeitsbedingungen und Entlohnung, insbesondere in den unteren Lohngruppen. Die " +
						"Mitarbeitenden in der Pflege und im Öffentlichen Dienst stemmen die staatliche Daseinsfürsorge: " +
						"Von der Abfallwirtschaft, über die öffentliche Verwaltung bis hin zu den Kindertagesstätten und " +
						"den öffentlichen Kliniken. Alles Tätigkeiten, die für ein menschliches Leben in dieser Gesellschaft " +
						"wichtig sind.</p>" +
						"<p>Außerdem: Viele Frauen und Queers/FLINTAs sind im Öffentlichen Dienst beschäftigt. Es sind " +
						"insbesondere die historisch „weiblichen“ Berufe, wie im Sozial- und Erziehungsdienst, in der " +
						"Pflege oder in der Reinigung, die prekär bezahlt werden oder in denen die Arbeitsbedingungen " +
						"schlecht und die Anerkennung gering sind.</p>" +
						"<p>Während der Staat Gaskonzerne subventioniert und das Militär mit 100 Milliarden aufrüstet, droht " +
						"der weitere Abbau sozialer Dienstleistungen und gesellschaftlich organisierter Sorgearbeit. " +
						"Wenn öffentliche Betreuungsmöglichkeiten wegfallen, dann nimmt die unbezahlte Care-Arbeit " +
						"zu, die meist auf den Schultern von Frauen und Queers/FLINTAs lastet.</p>" +
						"<p>Die kapitalistische Gesellschaft hat kein Interesse ein gutes Leben für alle zu organisieren " +
						"und eine vollumfängliche kostenlose öffentliche Daseinsfürsorge zu garantieren. Um sich " +
						"die Reproduktionsarbeit nichts kosten zulassen wird auf eine patriarchale Arbeitsteilung " +
						"zurückgegriffen. Der Kapitalismus ist auf die systematische Ausbeutung und Unterdrückung " +
						"von uns allen angewiesen und wird das Patriarchat nicht freiwillig aufgeben. Deshalb ist unser " +
						"antipatriarchaler Kampf auch antikapitalistisch. Dafür ist es wichtig, Arbeits- und feministische/" +
						"Frauenkämpfe miteinander zu verbinden. Wir sind doppelt so mächtig, wenn wir uns zusammen " +
						"schließen und gemeinsam streiken. Wir wollen ein gutes Leben, das wir uns auch leisten können, " +
						"wir wollen kollektive und gemeinschaftliche Daseinsfürsorge sowie mehr selbstbestimmte Zeit.</p>" +
						"<h2>Mit dem feministischen Streik hin zum guten Leben</h2>" +
						"<p>Eine bessere Gesellschaft können wir uns nur selbst erkämpfen. Schließen wir uns zusammen, " +
						"um der kapitalistischen Vereinzelung, Krieg und Krise die Stirn zu bieten und zu zeigen, dass wir " +
						"viele sind!</p>" +
						"<p>Wir kämpfen für mehr als bessere Löhne. Wir kämpfen solidarisch mit den vielfältigen " +
						"internationalen Bewegungen für eine bessere Welt in Rojava, Teheran und Argentinien. Gegen " +
						"patriarchale Gewalt und für eine Veränderung hin zu einer Gesellschaft, in der gegenseitige " +
						"Fürsorge und eine bedarfsorientierte und demokratische Produktionsweise im Mittelpunkt " +
						"stehen. Die Welt, in der wir leben möchten, wird nur ohne Kapitalismus zu haben sein und die " +
						"Abschaffung dieser Wirtschaftsweise ist ohne Frauen und Queers/FLINTAs nicht zu machen. Wir " +
						"kämpfen für eine solidarische Gesellschaft, in der wir ein selbstbestimmtes und sicheres Leben " +
						"führen können. Eine Gesellschaft, in der die Unterdrückung des Menschen durch den Menschen " +
						"der Geschichte angehört.</p>" +
						"<p><a id='footnote-1' name='footnote-1'></a>1: FLINTA für Frauen, Lesben, Inter, Trans, Agender</p>" +
						"<p class='download_block'><a target='_blank' href='files/2023/FStreik-8M-2023.pdf'><img class='download_sign' src='pictures/download.png'/>" +
						"8M 2023 Aufruf als PDF herunterladen</a></p>";
					break;
			}
			break;

		case "impressum":
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Impressum";
					main_text.innerHTML =
						"<p class='large'>Herausgeber*in:<br>" +
						"A Softer Space DE, Inhaber*in Moya Schiller<br>" +
						"Bad Nauheimer Str. 4<br>" +
						"64289 Darmstadt<br>" +
						"Deutschland<br>" +
						"<br>" +
						"Kontakt bezüglich der Webseite selbst:<br>" +
						"<a href='mailto:moya@asofterspace.com'>moya@asofterspace.com</a><br>" +
						"<br>" +
						"Kontakt zum Feministischen Streik:<br>" +
						"<a href='mailto:fstreik_bundesweit@riseup.net'>fstreik_bundesweit@riseup.net</a></p>";
					break;
			}
			break;

		case "datenschutz":
			switch (window.currentLang) {
				case 'en':
					largeText =
						"This page has not yet been translated, sorry!";
					break;
				case 'es':
					largeText =
						"Este texto aún no ha sido traducido, lo sentimos.";
					break;
				default:
					title = "Datenschutz";
					largeText =
						"Wir nutzen keinerlei Cookies, verwenden keine Dienste Dritter, " +
						"loggen keine Daten, und haben daher schlichtweg keine Daten von Ihnen.\n" +
						"Glück gehabt!";
					break;
			}
			break;

		default:
			console.log("Ooops - navigating to a page that does not exist: '" + where + "'!");
			break;
	}

	if (largeText != null) {
		main_text.innerHTML = "<p class='large'>" + largeText.split("\n").join("</p><p class='large'>") + "</p>";
	}

	if (onMainpage) {
		document.getElementById("hero_container").className = 'hero purple hero_large';
		document.getElementById("hero_logo_img").style.display = "block";
		document.getElementById("hero_text_mainpage_top").style.display = "block";
		document.getElementById("hero_text_mainpage_bottom").style.display = "block";
		document.getElementById("hero_text_subpages").style.display = "none";
	} else {
		document.getElementById("hero_container").className = 'hero purple hero_slim';
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
