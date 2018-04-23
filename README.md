![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)

# [Codefights](https://codefights.com/profile/wachino)
Codefights is, among other things, a platform where you can practice, learn and improve your programming skills (either by programming with different languages, by learning/practicing different mathematical algorithms...).

This repository contains my own solutions of the Codefights problems.

> You can take a look at my [Codefights user profile](https://codefights.com/profile/wachino) to see what problems have I solved.

## How to clone this repository

This project contains submodules, so after cloning it (`git clone git@github.com:wachino/codefights.git`), if you want to get all the content of the submodules, run the `main` script:

```
./main.sh
```

This script initializes the submodules and updates the content of the submodules to the specified commit.

In addiction, if you want to pull all the submodules to the latest commit, you can run
```
git submodule foreach git pull origin master
```

Or if you want to pull all the latest changes in a specific submodule, you can run:
```
cd your-desired-submodule/
git pull origin master
```

## About my Codefights profile
You can see that most of the problems are written in `JavaScript` (except in the problems where we can not choose the programming language).
