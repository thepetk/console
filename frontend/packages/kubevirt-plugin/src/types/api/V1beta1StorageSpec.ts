// tslint:disable
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from './V1LabelSelector';
import { V1ResourceRequirements } from './V1ResourceRequirements';
import { V1TypedLocalObjectReference } from './V1TypedLocalObjectReference';

/**
 * StorageSpec defines the Storage type specification
 * @export
 * @interface V1beta1StorageSpec
 */
export interface V1beta1StorageSpec {
  /**
   * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   * @type {Array<object>}
   * @memberof V1PersistentVolumeClaimSpec
   */
  accessModes?: object[] | string[];
  /**
   *
   * @type {V1TypedLocalObjectReference}
   * @memberof V1PersistentVolumeClaimSpec
   */
  dataSource?: V1TypedLocalObjectReference;
  /**
   *
   * @type {V1ResourceRequirements}
   * @memberof V1PersistentVolumeClaimSpec
   */
  resources?: V1ResourceRequirements;
  /**
   *
   * @type {V1LabelSelector}
   * @memberof V1PersistentVolumeClaimSpec
   */
  selector?: V1LabelSelector;
  /**
   * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
   * @type {string}
   * @memberof V1PersistentVolumeClaimSpec
   */
  storageClassName?: string;
  /**
   *
   * @type {object}
   * @memberof V1PersistentVolumeClaimSpec
   */
  volumeMode?: object | string;
  /**
   * VolumeName is the binding reference to the PersistentVolume backing this claim.
   * @type {string}
   * @memberof V1PersistentVolumeClaimSpec
   */
  volumeName?: string;
}
