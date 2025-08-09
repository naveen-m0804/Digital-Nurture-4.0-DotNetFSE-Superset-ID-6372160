# --- Step 1: Git and Environment Setup ---

# Verify Git installation.
git --version

# Configure user identity globally. Replace "Your Name" and "your.email@example.com" with your information.
git config --global user.name "naveen-m0804"
git config --global user.email "mnaveenm2004@gmail.com"

# List current configurations to verify the settings.
git config --list

# --- Step 2: Integrate Notepad++ as Default Git Editor ---

# Create an alias for notepad++. This is optional but can be helpful.
# notepad++ C:/Users/[Your_Username]/.bash_profile
# In the file, add: alias notepad++='/c/Program\ Files/Notepad++/notepad++.exe'
# Note: You may need to replace C:/Program Files with the actual path if different.

# Set Notepad++ as the global default editor for Git.
# The "-multiInst" and "-notabbar" flags are useful for Git's use case.
git config --global core.editor "notepad++ -multiInst -notabbar -nosession"

# Verify that Notepad++ is set as the default editor.
git config --list

# --- Step 3: Create a Local Repository and Add a File ---

# Initialize a new Git repository in a directory named "GitDemo".
git init GitDemo

# Navigate into the new repository directory.
cd GitDemo

# Create a new file named welcome.txt with some content.
echo "Hello, welcome to Git." > welcome.txt

# Check the status of the repository.
git status

# Add the new file to the staging area.
git add welcome.txt

# Commit the file with a message. This uses the editor for a multi-line message.
git commit -m "Initial commit of welcome.txt"

# --- Step 4: Implement .gitignore ---

# Create an example log file and a log directory that should be ignored.
echo "This is a temporary log file." > example.log
mkdir log
echo "This is a log file in the log folder." > log/folder_log.log

# Create and open the .gitignore file with the default editor.
git config --get core.editor
notepad++ .gitignore

# In the editor, add the patterns to ignore.
# Add the following lines to the file:
# *.log
# log/

# Save and close the .gitignore file.
# Check the status to see that the new log files are now ignored.
git status

# Add and commit the .gitignore file itself. This is important to track the rules.
git add .gitignore
git commit -m "Added .gitignore to ignore log files and folders."

# --- Step 5: Connect to GitLab and Push to Remote ---

# This step assumes you have already created a project named "GitDemo" on GitLab.
# Replace the URL with your actual GitLab repository URL.
git remote add origin https://gitlab.com/[your_username]/GitDemo.git

# Pull the remote repository to ensure your local repository is up to date (optional but recommended).
# This is usually done before the first push.
git pull origin master

# Push the local changes to the remote repository's 'master' branch.
# The -u flag sets the upstream branch, so future pushes can be just 'git push'.
git push -u origin master