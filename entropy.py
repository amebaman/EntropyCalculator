#Lauren Wong, Robin Wong, Tim Hennigan
#Spring 2015
#Final Project: Language Entropy Calculator
#
#This Python3 file parses a file of english text and selects a sentence to deliver
#to the Javascript portion of the program.

import random
import json
import time

#a main method that cleans the file, and parses it out into a list of sentences
def main():
	files = ["big-bang-theory-series-1-formatted.txt", "buffy-season-1-formatted.txt", "drseuss-formatted.txt", "friends-season-1-formatted.txt", "mlp-season-1-formatted.txt", "republican-debate-formatted.txt", "shakespeare-partial-formatted.txt", "sotu-obama.txt"]
	myPicks = []
	while True:
	    if time.clock()%2==0:
		for i in range (0, 8):
		   #open the chosen file
		    startFile = open(files[i], "r")
		    wholeFile = startFile.read()
		    #split into a list of paragraphs
		    paragraphs = wholeFile.splitlines()
		    sentences = []
		    #split into a list of sentences
		    for par in paragraphs:
			sentences.extend(par.split("."))
		    #choose a sentence
		    myPicks.append( pick(sentences) + ".")
		    with open('data.json', 'w') as outfile:
			json.dump({'sentences':myPicks}, outfile)
		print(myPicks)
		myPicks=[]

#a method to choose a valid random sentence from the selected file
def pick(myList):
	#pick a random number and choose that sentence in the list
	num = random.randint(0, len(myList))
	selection = myList[num]
	#if that selection is not valid, we select another one
	try:
		if selection[0] == "-":
			return pick(myList)
		elif len(selection) < 40:
			return pick(myList)
		elif "0" in selection or "1" in selection or "2" in selection or "3" in selection or "4" in selection or "5" in selection or "6" in selection or "7" in selection or "8" in selection or "9" in selection:
			return pick(myList)
		else:
			return selection
	except:
		return pick(myList)
	#we return our final selection to the main method
	


main()
