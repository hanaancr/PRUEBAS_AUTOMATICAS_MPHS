#!/bin/bash
cd ~
. bash_profile
cd /Users/hangel/Proyectos/ProyectoRAUT/raut
cypress run . &> /Users/hangel/Proyectos/ProyectoRAUT/backend/public/loggerCypress.txt
