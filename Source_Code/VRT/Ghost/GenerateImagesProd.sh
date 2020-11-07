#!/bin/bash
cd ~
. bash_profile
cd /Users/hangel/Proyectos/ProyectoRAUT/rautProduccion
cypress run . &> /Users/hangel/Proyectos/ProyectoRAUT/backend/public/loggerCypressProd.txt