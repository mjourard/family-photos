<?php
/**
 * This script is for generating dummy meta data about the dummy pictures saved in this repo for displaying the web app
 */

$dummyPicFolder = __DIR__ . '/../public/imgs';
$saveFile = __DIR__ . '/../src/meta.js';

$namePool = [
	'Malcolm Reynolds',
	'Zoe Washburne',
	'Hoban Washburne',
	'Inara Serra',
	'Jayne Cobb',
	'Kaylee Frye',
	'Simon Tam',
	'River Tam',
	'Derrial Book'
];

$locationPool = [
	'Serenity',
	'New Kasmir',
	'Greenleaf',
	'Jaynestown'
];


$minDate = DateTime::createFromFormat('Y-m-d', '2468-09-20');
$maxDate = DateTime::createFromFormat('Y-m-d', '2519-04-30');


$files = array_diff(scandir($dummyPicFolder), ['.', '..']);
$data = [];
echo "found " . count($files) . " files\n";
foreach($files as $file)
{
	$people = [];
	$num = rand(0, count($namePool) / 3);
	for($i = 0; $i < $num; $i++)
	{
		do
		{
			$chosen = $namePool[rand(0, count($namePool) - 1)];
		} while(isset($people[$chosen]));
		$people[$chosen] = 0;
	}

	$location = $locationPool[rand(1, count($locationPool) - 1)];
	$time = mt_rand($minDate->getTimestamp(), $maxDate->getTimestamp());
	$dt = new DateTime();
	$dt->setTimestamp($time);
	$id = uniqid();
	$data[$id] = [
		'id'       => $id,
		'url'      => $file,
		'people'   => array_keys($people),
		'location' => $location,
		'date'     => $dt->format('Y-m-d')
	];
}

//yaml_emit_file($saveFile, $data);
file_put_contents($saveFile, "const metaJson = " . json_encode($data, JSON_PRETTY_PRINT) . ";\n\nexport default metaJson;");
