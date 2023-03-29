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
		} else {
			sidebar.classList.remove('btnkanan');

		}
		// pilih semua elemen dengan kelas multi-collapse
		const multiCollapses = document.querySelectorAll('.multi-collapse');

		// loop melalui semua elemen multi-collapse dan hapus kelas 'show'
		multiCollapses.forEach(multiCollapse => {
			multiCollapse.classList.remove('show');
		});
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

// pilih elemen dengan kelas multi-collapse
const activesidebar3 = document.querySelectorAll('.iconkanans');

activesidebar3.forEach(myElement => {
	// tambahkan event listener ke elemen tersebut
	myElement.addEventListener('click', function () {
		var myDiv = document.getElementById("sidebar3");
		if (!myDiv.classList.contains("active")) {
			var myDiv = document.getElementById("sidebar3");
			const sidebar = document.getElementById('sidebarCollapse2');
			// Periksa apakah elemen memiliki kelas "active"
			if (!myDiv.classList.contains("active")) {
				// Jika tidak memiliki kelas "active", tambahkan CSS lain
				sidebar.classList.add('btnkanan');
			} else {
				sidebar.classList.remove('btnkanan');
			}
		} else {
			$('#sidebar3').toggleClass('active');
			var myDiv = document.getElementById("sidebar3");
			const sidebar = document.getElementById('sidebarCollapse2');
			// Periksa apakah elemen memiliki kelas "active"
			if (!myDiv.classList.contains("active")) {
				// Jika tidak memiliki kelas "active", tambahkan CSS lain
				sidebar.classList.add('btnkanan');
			} else {
				sidebar.classList.remove('btnkanan');
			}
		}
	});
});


// Get references to the HTML elements we'll need
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

// Create an array to hold our tasks
let tasks = [];

// Add event listener to the form submission
taskForm.addEventListener('submit', (event) => {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the user input and create a new task object
	const taskName = taskInput.value;
	const task = { name: taskName, completed: false };

	// Add the task to the array and clear the input
	tasks.push(task);
	taskInput.value = '';

	// Render the tasks
	renderTasks();
});


// Find the active task
function findActiveTask() {
	return tasks.filter(task => !task.completed);
}

// Render the list of tasks
function renderTasks() {
	// Clear the task list
	taskList.innerHTML = '';
	// Filter the completed and uncompleted tasks
	const completedTasks = tasks.filter(task => task.completed);
	const uncompletedTasks = tasks.filter(task => !task.completed);

	// Concatenate the uncompleted tasks and completed tasks
	const sortedTasks = uncompletedTasks.concat(completedTasks);
	// Loop through the tasks and create a list item for each one
	sortedTasks.forEach((task, index) => {
		const li = document.createElement('li');
		li.className = 'list-group-item';

		// Add a checkbox and label for the task name
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.checked = task.completed;
		checkbox.addEventListener('change', () => {
			// Toggle the completed status of the task
			task.completed = !task.completed;

			if (task.completed) {
				label.style.textDecoration = 'line-through';
			} else {
				label.style.textDecoration = 'none';
			}
			// Render the tasks again
			renderTasks();
		});

		const label = document.createElement('label');
		label.textContent = task.name;
		label.className = 'small ml-2'; // Add this line

		if (task.completed) {
			label.style.textDecoration = 'line-through';
		}

		// Add a delete button for the task
		const deleteBtn = document.createElement('button');
		deleteBtn.className = 'btn btn-danger btn-sm float-right ml-2 small';
		deleteBtn.textContent = 'Delete';
		deleteBtn.addEventListener('click', () => {
			// Remove the task from the array
			tasks.splice(index, 1);

			// Render the tasks again
			renderTasks();
		});

		// Append the elements to the list item and the list item to the task list
		li.appendChild(checkbox);
		li.appendChild(label);
		li.appendChild(deleteBtn);
		taskList.appendChild(li);
	});
	// Call the findActiveTask function to get the active task
	const activeTask = findActiveTask();

	const taskBadge = document.querySelector('#taskbadge');
	taskBadge.textContent = activeTask.length;

}

// Call the renderTasks function to initialize the task list
renderTasks();




$(document).ready(function () {
	scalizeInit();
	$('.scalize').click(function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		console.log("x: " + x + ", y: " + y);
	});
});

// FLOATING

(function ($) {
	$.fn.sideFollow = function (dtime) {

		var floating = $(this);
		var originalTop = parseInt($(this).css('top'));

		dtime ? dtime = dtime : dtime = 750;

		goFollow();

		$(window).scroll(function () {
			goFollow();
		});

		function goFollow() {
			var scrollTop = $(this).scrollTop();
			floating.animate({
				top: originalTop + scrollTop
			}, {
				duration: dtime,
				queue: false
			});
		}

	}

	$(document).ready(function () {
		//   $('.float').addClass('active-float');

	});

	$('.event-close-btn').click(function () {
		$('.float').removeClass('active-float');
	});


})(jQuery);


1
$(".float").sideFollow();

// end FLOATING
var nilaiButton = '';

function showDataDetail(event) {


	var row = $(event.target).closest('tr');
	// $(event.target).find('i').removeClass('fa-eye').addClass('fa-times');
	var icon = row.find('i');
	if (icon.hasClass('fa-eye')) {
		icon.removeClass('fa-eye').addClass('fa-times text-danger');
		// kode untuk menampilkan detail data
	} else {
		icon.removeClass('fa-times text-danger').addClass('fa-eye');
		// kode untuk menyembunyikan detail data
	}
	if (nilaiButton != row.find('td:eq(0)').text()) {
		var taskId = row.find('td:eq(0)').text();
		var assignedEmployeeId = row.find('td:eq(1)').text();
		var taskSubject = row.find('td:eq(2)').text();
		var taskStartDate = row.find('td:eq(3)').text();
		var taskDueDate = row.find('td:eq(4)').text();
		var taskStatus = row.find('td:eq(5)').text();
		var taskPriority = row.find('td:eq(6)').text();
		var taskCompletion = row.find('td:eq(7)').text();
		var taskParentId = row.find('td:eq(8)').text();

		// Do something with the data, such as displaying it in an alert
		// alert('Task ID: ' + taskId + '\nAssigned Employee ID: ' + assignedEmployeeId 
		//       + '\nTask Subject: ' + taskSubject + '\nTask Start Date: ' + taskStartDate 
		//       + '\nTask Due Date: ' + taskDueDate + '\nTask Status: ' + taskStatus 
		//       + '\nTask Priority: ' + taskPriority + '\nTask Completion: ' + taskCompletion 
		//       + '\nTask Parent ID: ' + taskParentId);
		var htmls = 'Task ID: ' + taskId + '</br>Assigned Employee ID: ' + assignedEmployeeId
			+ '</br>Task Subject: ' + taskSubject + '</br>Task Start Date: ' + taskStartDate
			+ '</br>Task Due Date: ' + taskDueDate + '</br>Task Status: ' + taskStatus
			+ '</br>Task Priority: ' + taskPriority + '</br>Task Completion: ' + taskCompletion
			+ '</br>Task Parent ID: ' + taskParentId;
		$('.float').addClass('active-float');
		$('#floating-detail').html(htmls);
		nilaiButton = row.find('td:eq(0)').text();
	} else {
		console.log('masuk sini');
		$('#tobrak i').removeClass('fa-times text-danger').addClass('fa-eye');

		$('.float').removeClass('active-float');
		nilaiButton = '';


	}


}

