<?php
class login_customizer extends rcube_plugin {
    public function init() {
        $this->include_script("login_customizer.js");
        $this->include_stylesheet("login_customizer.css");
    }
}