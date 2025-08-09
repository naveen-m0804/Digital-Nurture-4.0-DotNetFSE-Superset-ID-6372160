# --- Step 1: Verify and List Branches ---

# 1. Check the status of your local 'master' branch to ensure it is clean.
git status

# 2. List all local branches to confirm you are on the 'master' branch.
git branch

# --- Step 2: Sync and Push to Remote ---

# 3. Pull the latest changes from the remote 'master' branch to your local repository.
git pull origin master

# 4. Push your local changes (from HOL_002) to the remote repository.
git push origin master

# 5. After the push is complete, you can verify the changes by checking your remote repository (e.g., on GitLab)
# and observing the updated commit history.