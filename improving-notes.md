
# Improving

- Grid layout for the Posts index page
- Background color for certain tags (e.g. JavaScript, React-blue, Vue-green, etc.)
- Post paging

# Learned

- Select the last 2 elements in CSS

	```css
	.post:nth-last-of-type(-n + 2) {
		margin-bottom: 0;
	}
	```

- Recover a deleted text file

	```bash
	grep -a -C 200 -F 'Unique string in text file' /dev/sdXN
	```
