% : Doc/%/*.tex
	cd Doc/$@ && \
	pdflatex $@.tex && \
	rm -f *.aux *.lof *.log *.lot *.out *.toc
