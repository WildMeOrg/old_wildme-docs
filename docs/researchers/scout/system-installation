# System Installation

The Scout Server laptop must be dedicated to running the Scout application, and the following setup steps are required. In advance of installation, you need to:
* Bring the laptop to a location with a good Internet connection. Software download is required during this process, and some of the downloaded components may be > 2 GB.
* Obtain a thumbdrive (8GB minimum) to hold downloaded files for the Ubuntu operating system.

<span style="color:red"> WARNING: This includes wiping the server of existing content and installing the Ubuntu Linux operating system.</span>

## Download Ubuntu Desktop Operating System Image
Installing the Ubuntu Desktop operating system (OS) is the first step in installing Scout. Ubuntu should be installed as the only OS on the laptop, and only version 20.04. Dual boot configurations are not supported.

1. On a separate computer, open a web browser to: https://releases.ubuntu.com/20.04.5/
2. Download the ISO Desktop image: https://releases.ubuntu.com/20.04.5/ubuntu-20.04.5-desktop-amd64.iso
3. Follow the tutorial here: https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview

You should have the Ubuntu Desktop ISO on a USB thumbdrive at the end of these steps.

## Install Ubuntu OS Image from USB
<span style="color:red">WARNING: THIS STEP DELETES ALL DATA FROM THE LAPTOP</span>
<span style="color:red">WARNING: THIS STEP REMOVES WINDOWS FROM THE LAPTOP</span>

To install Ubuntu Linux as the operating system on the Scout Server laptop:

1. On a separate computer, open a web browser to this reference page for Ubuntu installation: https://ubuntu.com/tutorials/install-ubuntu-desktop#3-create-a-bootable-usb-stick

    This reference URL provides additional instructions.
    
2. Plug the thumb drive with the downloaded ISO image into the Scout Server laptop.
3. Restart the laptop.
4. On restart, press the F12 key for the boot menu.
5. Select the USB drive and boot to the USB.
6. From the reference URL above:
    1. Skip Steps 1-3 and go to Step 4
    2. Select a "Normal Installation" and check both of the following:
        1. "Download updates while installing Ubuntu"
        2. "Install third-party software for graphics and Wi-Fi hardware and additional media formats"
    3. Select "Erase disk and install Ubuntu"
7. Wait for the installation to complete.
8. Restart the computer when prompted and remove the USB.

## First-time Ubuntu configuration
When Ubuntu Linux boots for the first time as the OS, select the following configuration options during its initial configuration questions:
1. Click Next on "Livepatch" to skip setup.
2. When prompted with Help improve Ubuntu, select "no" before clicking Next.
3. Allow Location Services then click Next.
4. Click Next on "Privacy".
5. Search for Software Updater via the app menu (the icon with 9 squares in the bottom corner of your window), and it will check for updates and apply them. Update Ubuntu for all suggested options. 
<span style="color:red">WARNING: DO NOT UPGRADE TO UBUNTU 22.04.</span>

At the end of this process, you should be presented with the Ubuntu desktop environment, which loads with every server restart.


## Install Chrome Web Browser
1. Chrome is the only currently supported web browser for Scout. To install Chrome on your new Ubuntu desktop:
2. Open the Ubuntu command-line terminal either by using the Ctrl+Alt+T keyboard shortcut or by clicking on the Terminal icon.
Use wget to download the latest Google Chrome .deb package :

  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

3. Install Google Chrome from the Terminal command line:

  sudo apt install ./google-chrome-stable_current_amd64.deb

When prompted, enter your user password, and the installation will start. At this point, you have Chrome installed on your Ubuntu system and can use it from the Desktop. 
4. In the Activities search bar on your Ubuntu Desktop, now type “Google Chrome” and click on the icon to launch the application.

## Update CUDA Toolkit
You must upgrade the CUDA Toolkit to ensure the Scout Server can properly use its GPU for machine learning. To get the required version of the CUDA toolkit:

1. Open the following URL in Chrome:

  https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=20.04&target_type=deb_network

The URL pre-selects the required options for the Ubuntu CUDA toolkit.
2. In the Terminal previously opened, follow the command line instructions from the page above in the “Base Installer” section.
3. In the Terminal, execute the command: nano ~/.profile
4. Add the following lines to the bottom of the file:

  export PATH=/usr/local/cuda/bin:$PATH
  export CUDA_HOME=/usr/local/cuda

5. Press the Ctrl-X keys.
6. Select “Yes” to save these file changes.

## Reboot the Scout Server

To ensure all of the changes above are part of the Scout Server, reboot the laptop through the Ubuntu desktop.

## Install Docker
After the Scout Server has rebooted and you have returned to the Ubuntu Desktop, it is time to install Docker.

1. Open Google Chrome.
2. Navigate to the URL: https://docs.docker.com/engine/install/ubuntu/
3. Follow the tutorial instructions to install Docker on Ubuntu via the Ubuntu Terminal app.
4. After installing Docker, add your username to the docker group to ensure you have the proper permissions:

    sudo usermod -aG docker $USER

## Install NVIDIA Docker
In order for Scout’s Docker container to take advantage of the system NVIDIA GPU on the laptop, you must also install NVIDIA Docker.

1. Open a new tab in Google Chrome.
2. Navigate to the URL:

    https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker


3. Step through the tutorial for installing on Ubuntu. The tutorial includes a confirmation screen to prove that NVIDIA Docker is successfully running. If you can achieve confirmation, proceed to the next section of this document.

## Reboot the Scout Server

To ensure all of the changes above are part of the Scout Server, reboot the laptop through the Ubuntu desktop.

## Setting Up the Network Attached Storage (NAS)

Scout is meant to process a large volume of aerial survey imagery, which may measure in the terabytes. At that volume, a NAS device is needed to hold the images. The instructions below are meant to provide general guidance on mounting the NAS to Ubuntu. The process to mount your specific device may vary.

To mount a NAS: 

1. Connect the NAS to the Scout Server laptop via the fastest available connector.
2. Open "Disks" on the Ubuntu desktop to view the attached disks. Your new NAS device should be listed.
3. Partition the newly attached disk with GPT.
4. Create one partition on the NAS device with format EXT4.
5. Mount the new drive at /nas. 
6. In the Ubuntu desktop, navigate to /nas and create a subfolder, such as /nas/images, to store images to be added to Scout. 
  Note: Subsequent instructions in this documentation reference /nas/images when referencing this subfolder. However, you can set up a different subdirectory name. This folder is used to hold unprocessed aerial survey images that Scout starts importing as soon as it is installed and running. As soon as this subfolder is created, you can begin copying survey images into it.

Scout uses the new disk as:
1. A staging point from which to access new aerial survey images.
2. A location for long-term storage of images already ingested by Scout Server.

## NAS disconnection and reconnection (post-install maintenance)

If you need to disconnect and reconnect the NAS while Scout is running and are then unable to start or restart Scout, delete this file from the Ubuntu Terminal and then start Scout again:

~/tmp/config/settings.json

In terminal, the command would be rm ~/tmp/config/settings.json - or in the Files utility go to the home directory and look for the folder tmp/config, then manually delete (move to trash) the settings.json file.

This settings file, which is stored in the home directory of the user account that runs Scout, is where Scout keeps its installation configuration. Deleting it will force Scout to request install information again on its next restart. Re-enter the same NAS path (e.g., /nas) and image ingestion folder (e.g., /nas/images) as previously specified to ensure Scout reconnects to the same data previously ingested.
## Verify hardware
As a final step, you should verify correct setup and operation of the Ubuntu server in preparation for Scout installation.

Search for Terminal via the app menu (the icon with 9 squares in the bottom corner of your window) and click to open it.

Execute the following commands in Terminal.

* sudo apt update
* sudo apt upgrade
* sudo apt install htop top
* htop 
    * Verify that you see the number of cores, memory, and SWAP at the top of the display
    * Press CTRL-C to stop htop.
* nvtop
    * verify that you see information about the laptop nvidia card, signaling correct GPU access
    * Press CTRL-C to stop nvtop.
* df -h
    * Verify that you see the NAS mounted at the correct location (recommendation: /nas)
    * Press CTRL-C to stop df -h

## Verify GPU compute with ScoutBot demo
From the Terminal window, you can test GPU execution on the laptop by executing some of Scout’s GPU-enabled ML capabilities.
1. Run the following command:
    docker run -it --rm --gpus all -p 5000:7860 wildme/scoutbot:main python3 app2.py

2. Open a separate Terminal window to watch GPU performance. 
3. Press CTRL-C to end the test. 
