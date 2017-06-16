<?php

namespace Drupal\drupal_dw_ui\Controller;

use Drupal\Core\Controller\ControllerBase;

class ComponentsController extends ControllerBase {
    public function render() {
        return array(
            '#title' => NULL,
            '#theme' => 'dw_ui_host',
            '#attached' => array(
                'library' => array(
                    'drupal_dw_ui/host',
                ),
            )
        );
    }
}
