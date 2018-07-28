# $1 contains the module name
#  Remove config entries
git config -f .git/config --remove-section submodule.$1
git config -f .gitmodules --remove-section submodule.$1

# Remove directory from index
git rm --cached $1

# Delete the unused files
rm -rf $1
rm -rf .git/modules/$1
