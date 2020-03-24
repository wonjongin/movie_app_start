git add .;
git commit -m "$(date +%Y)-$(date +%m)-$(date +%d)-$(date +%H):$(date +%M):$(date +%S)";
git push;
git log --all --graph --oneline;