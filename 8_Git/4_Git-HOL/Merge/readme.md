# --- Step 1: Set up the branches and conflicting changes ---

# 1. Verify if the master branch is in a clean state.
git status

# 2. Create a new branch named "GitWork" and switch to it.
git checkout -b GitWork

# 3. Create a new file "hello.xml" and add initial content.
echo "Hello from GitWork branch" > hello.xml

# 4. Stage and commit the changes to the "GitWork" branch.
git add hello.xml
git commit -m "Added hello.xml to GitWork branch"

# 5. Switch back to the master branch.
git checkout master

# 6. Modify the content of "hello.xml" on the master branch.
echo "Hello from master branch" > hello.xml

# 7. Commit the changes to the master branch.
git add hello.xml
git commit -m "Added hello.xml to master branch"

# --- Step 2: Create and Resolve the Conflict ---

# 8. Observe the log to see both branches have diverged.
git log --oneline --graph --decorate --all

# 9. View differences with the P4Merge tool.
# This step is for visualization and does not resolve the conflict.
git difftool master GitWork

# 10. Attempt to merge the "GitWork" branch into master. This will cause a conflict.
git merge GitWork

# 11. The terminal will indicate a merge conflict.
# The `hello.xml` file will be marked with conflict markers.

# 12. Use the configured 3-way merge tool (e.g., P4Merge) to resolve the conflict.
git mergetool

# 13. After resolving the conflict in the tool and saving the file, commit the merged changes.
git commit -m "Resolved merge conflict for hello.xml"

# --- Step 3: Clean up ---

# 14. Observe the git status. There may be a backup file left by the merge tool.
git status

# 15. Add backup files (e.g., those ending in .orig) to the .gitignore file.
echo "*.orig" >> .gitignore

# 16. Stage and commit the updated .gitignore file.
git add .gitignore
git commit -m "Added *.orig to .gitignore"

# 17. List all available branches to confirm the "GitWork" branch is still there.
git branch

# 18. Delete the "GitWork" branch now that it has been successfully merged.
git branch -d GitWork

# 19. Observe the final log to see the clean commit history.
git log --oneline --graph --decorate