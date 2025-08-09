# --- Step 1: Branching ---

# 1. Create a new branch named "GitNewBranch" and switch to it.
git checkout -b GitNewBranch

# 2. List all local and remote branches to confirm the new branch was created and you are on it.
# An asterisk (*) will indicate the current branch.
git branch -a

# 3. Add a new file with some content.
echo "This is a new feature for the project." > new_feature.txt

# 4. Stage and commit the changes to the new branch.
git add new_feature.txt
git commit -m "Added a new feature file"

# 5. Check the status of the branch.
git status

# --- Step 2: Merging ---

# 1. Switch back to the master branch.
git checkout master

# 2. Display the differences between the two branches in the command line.
git diff GitNewBranch

# 3. Use P4Merge to visually list the differences.
# Ensure P4Merge is correctly configured in your Git environment.
git difftool master GitNewBranch

# 4. Merge the "GitNewBranch" into the "master" branch.
git merge GitNewBranch

# 5. View the commit log to see the merge history.
git log --oneline --graph --decorate

# 6. Delete the "GitNewBranch" after a successful merge.
git branch -d GitNewBranch

# 7. Check the final status to confirm the branch is deleted and the merge is complete.
git status