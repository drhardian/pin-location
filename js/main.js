(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		const sidebar = document.getElementById('sidebar2');
		sidebar.classList.add('hide');
		$('#sidebar2').toggle();
	});

	$('#sidebarCollapse2').on('click', function () {
		$('#sidebar3').toggleClass('active');
		  // Dapatkan elemen yang akan diperiksa
		  var myDiv = document.getElementById("sidebar3"); 
		const sidebar = document.getElementById('sidebarCollapse2');

		  // Periksa apakah elemen memiliki kelas "active"
		  if (!myDiv.classList.contains("active")) {
			// Jika tidak memiliki kelas "active", tambahkan CSS lain
			sidebar.classList.add('btnkanan');
		}else{
			sidebar.classList.remove('btnkanan');

		}
	});


})(jQuery);

$(function () {
	$('#tree').jstree({
		// Use HTML data source
		'core': {
			'data': {
				'url': 'provinsi.json',
				'dataType': 'json'
			}
		},
		// Enable plugins
		'plugins': ['search', 'checkbox', 'wholerow'],
		// Configure plugins
		'search': {
			// Search only node text
			'search_leaves_only': true,
			// Show only matching nodes
			'show_only_matches': false,
			// Use custom search function
			'search_callback': function (str, node) {
				// Case insensitive search
				return node.text.toLowerCase().includes(str.toLowerCase());
			}
		},
		'checkbox': {
			// Tie selection to checked state
			'tie_selection': true,
			// Show checkboxes only on leaves
			'whole_node': false,
			// Keep selected state on parent nodes
			'keep_selected_style': false
		}
	});
	// Bind search input to tree search function
	$('#search').keyup(function () {
		var query = $(this).val();
		$('#tree').jstree(true).search(query);
	});

	// Handle search events
	$('#tree').on('search.jstree', function (e, data) {
		console.log('Search completed: ', data.nodes.length, 'nodes found');
	});
	$('#tree').on('clear_search.jstree', function (e, data) {
		console.log('Search cleared');
	});


	// Event saat button Pilih Acak di klik
	$('#random').click(function () {
		var nodes = $('#tree').jstree(true).get_selected(true);
		console.log(nodes);
		if (nodes.length) {
			var random_node = nodes[Math.floor(Math.random() * nodes.length)];
			console.log(random_node);

			$('#tree').jstree('deselect_all');
			$('#tree').jstree('select_node', random_node.id);
		}
	});

	// Event saat button Centang Semua di klik
	$('#check').on('click', function () {
		$('#tree').jstree('check_all');
	});

	// Event saat button Hapus Semua Centang di klik
	$('#uncheck').on('click', function () {
		$('#tree').jstree('uncheck_all');
	});
});


$(document).ready(function () {
	$('#mySelect').select2();

	$('#addOptionBtn').click(function () {
		var optionValue = prompt('Masukkan nilai opsi baru:');
		if (optionValue) {
			var newOption = new Option(optionValue, optionValue, true, true);
			$('#mySelect').append(newOption).trigger('change');
		}
	});


	const blogNotif = document.querySelector('.fa-sticky-note + .badge');
	blogNotif.innerText = '4';

	const contactNotif = document.querySelector('.fa-paper-plane + .badge');
	contactNotif.innerText = '999';


});




const weatherInfoElem = document.getElementById('weather-info');

// fungsi untuk mendapatkan data cuaca dari OpenWeatherMap API
async function getWeatherData() {
	const response = await
		fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta,id&appid=8fbdec2c1e3a2d52710b09caea48f110&units=metric');
	const data = await response.json();
	return data;
}

// fungsi untuk menampilkan informasi cuaca pada bagian footer
async function displayWeatherInfo() {
	const weatherData = await getWeatherData();
	const { name, weather, main } = weatherData;

	// mengambil data waktu saat ini
	const now = new Date();
	const dateStr = now.toLocaleDateString('en-US', {
		weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
	});
	const timeStr = now.toLocaleTimeString('en-US', { hour12: false });

	// membuat teks untuk ditampilkan pada bagian footer
	const weatherDesc = weather[0].description;
	const temp = main.temp.toFixed(1);
	const feelsLike = main.feels_like.toFixed(1);
	const humidity = main.humidity;
	const weatherInfoStr = `${name}: ${weatherDesc}, ${temp} &#8451; (feels like ${feelsLike} &#8451;), ${humidity}%
humidity. ${dateStr}, ${timeStr}`;

	// menampilkan teks pada elemen #weather-info
	weatherInfoElem.innerHTML = weatherInfoStr;
}

// memanggil fungsi untuk menampilkan informasi cuaca pada saat halaman dimuat
displayWeatherInfo();
