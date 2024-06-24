#**VocabBuilder**

###Overview
I started this project while I was learning Chinese and was practicing it everyday. I was trying to absorb a lot of vocabulary all at once but needed a more efficient way to practice. So I created this app to facilitate that process. 

This first version has a starter vocabulary list of about 600 words from the HSK3 (Chinese Proficiency Test, Level 3) list, which was the level I was studying when I built this. Future plans for this project include complete versions of all levels HSK(1-6), as well as a Spanish version.

###Features
Each level consists of an extensive vocabulary list. The app breaks up this long list (~600 words) into smaller digestible **batches**. The user can then select whichever **batch** they want to start studying. Each **batch** contains 35 words in each deck. 

The user can repeat practicing familiar words in each deck, rather than waiting for the same word to pop up in a reshuffled deck of ~600. This allow s for timely recall practice, which is an important part of language learning. 

Additionally, there are two buttons, a **right** (*green, checkmark*) button and **left** (*red, repeat*) button which respectively allow the user to decide whether they want the current word to be omitted from the deck or reshuffled back in for more practice. The current deck finishes once the user clicks on the **right** *checkmark* button for each word. The user can then choose a different **batch** to continue studying. The user also has the option to switch **batches** without completing the current *batch* should they want to study a different sub-list.

###Build
1. Fork a copy of the project on your local machine
2. In your terminal, run command ```npm --version``` to confirm you have nom installed on your local machine
3. If you do not have npm installed, run ```npm install -g npm``` to install the latest version
4. Once npm is installed, run ```npm run dev``` to run the code
5. Navigate to the listed address to see the project 

See the [deployed version] at:
(https://vocab-builder-eta.vercel.app/)