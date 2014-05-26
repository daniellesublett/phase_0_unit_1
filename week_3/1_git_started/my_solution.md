## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
git add "adds" your file to a staging area. It does not commit your file, or changes you have made etc. it just tells git that there is a file you will commit. 

#### branch
A branch is a timeline of commits that allows multiple people to work on the same projects and then merge their versions. 

#### checkout
Navigational command that moves you to the repo you want to "check out"

#### clone
cloning a repository into a new directory, essentally just copying and pasting into a different place/folder.

#### commit
Sending your local repository or file to GitHub, essentially "saving" that version of the item you are working on.

#### fetch
Get items from another repository. You can "fetch" several objects at once.

#### log
Shows the history of your commits.

#### merge
Joining two branches ("timelines of commits") together.

#### pull
Fetches and merges in the same command, so you can integrate with another repository or branch. 

#### push
Updates your remote repositories. Commit just saves the changes on your local repository, you need push to "push" the file up online. 

#### reset
A time machine that lets you go back to the last commit that was perfect and good.

#### rm
Remove files.

#### status
Shows working status, including items that have been added ("staged"), but not comitted ("saved").

## Release 4: Git Workflow

- Push files to a remote repository
  1. Stage the files you want to commit by using git add
  2. Name your commit with a commit message. This will let you keep track of your changes. git commit -m(commit message goes here). This saves your changes on your local repository.
  3. git push to remote repository (origin,for example) branch on that remote repository (master, for example) it will use the branch with the same name on your local repository as the source. Will push any NEW commits from your local branch to the remote branch of the same name. 
- Fetch changes
  1. make sure that you already have a local repository with a remote URL set up for the project
  2. use git fetch <remote repository name>
  3. Merge the newly "fetched" remote branch with your local branch using git merge <remote repository name/branchname>
  4. OR use git pull <remote repository name/branchname> to do both fetch and merge at the same time. 
- Commit locally
  1. Stage the files you want to commit by using git add
  2. Name your commit with a commit message. This will let you keep track of your changes. git commit -m(commit message goes here). This saves your changes on your local repository.


## Release 5: Errors you encountered
1. Error
   Merge conflict
2. Solution
   https://help.github.com/articles/resolving-merge-conflicts
   You have to pick the version of the content that you want. 
3. Cause (explain the error)
   Merge conflicts happen when two branches have changed the same part of the same file, and then those branches are merged together. 

## Release 6: Reflection

Working from the command line still scares me, and the only way to make that stop is by using it. A lot. My biggest questions were all about the order of operations for pushing, pulling etc. The GitHub app kept the inner workings hidden, so I never really know what was going on. I had difficulty understanding the difference between "fetch" and "pull", this article was helpful: http://longair.net/blog/2009/04/16/git-fetch-and-merge/

Many of the tutorials and reading materials started out at the very beginning of creating a github account, installing git etc. which seemed a little redundant. I know how to use git init and what it does, but I'm still fuzzy on how to get my my-solution.md file up to the correct branch. Only way to find out is to try it, so here goes nothin'! 



