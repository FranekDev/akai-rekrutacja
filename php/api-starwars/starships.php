<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starships</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<h1>
    Starships
</h1>

<div class="starships">

    <?php foreach ($starships as $starship) : ?>

        <div class="starship">

            <h2 class="starship-name">
                <div class="name">Name:</div>
                <div><?= $starship['name'] ?></div>
            </h2>
            
            <div class="starship-pilots">
                <h3>
                    <div class="pilots">Pilots:</div>
                </h3>

                <?php if (count($starship['pilots']) > 0) : ?>

                    <ul class="starship-pilots__list">

                    <?php foreach ($starship['pilots'] as $pilot) : ?>
                        <?php $pilot = getData($pilot); ?>

                        <li><?= $pilot['name'] ?>
                          (<?= count($pilot['species']) ? getData($pilot['species'][0], 'name') : 'unknown' ?>)
                        </li>

                    <?php endforeach; ?>

                    </ul>

                <?php else : ?>
                    <p>No pilots</p>
                <?php endif; ?>
            </div>


            <div class="starship-featuredin">
            <h3>
                <div class="featured">Featured in:</div>
            </h3>
            <ul class="starship-films">
                <?php foreach ($starship['films'] as $film) : ?>
                    <?php $film = getData($film); ?>
                    <li><?= $film['title'] ?> (<?= formatDate($film['release_date']) ?>)</li>
                <?php endforeach; ?>
                </ul>
          </div>

        </div>

    <?php endforeach; ?>

</div>

    <form action="">
        <ul class="nav">
            <li class="<?= ((isset($_GET['page']) && $_GET['page'] == 1) || $_SERVER['REQUEST_URI'] == '/') ? 'active' : '' ?>">
                <a href="?page=1">1</a>
            </li>
            <li class="<?= isset($_GET['page']) && $_GET['page'] == 2 ? 'active' : '' ?>">
                <a href="?page=2">2</a>
            </li>
            <li class="<?= isset($_GET['page']) && $_GET['page'] == 3 ? 'active' : '' ?>">
                <a href="?page=3">3</a>
            </li>
            <li class="<?= isset($_GET['page']) && $_GET['page'] == 4 ? 'active' : '' ?>">
                <a href="?page=4">4</a>
            </li>
        </ul>
    </form>
    
</body>
</html>