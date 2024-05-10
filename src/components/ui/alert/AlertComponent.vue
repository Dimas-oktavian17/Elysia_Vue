<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-vue-next'
import { StoreApi } from '@/stores/StoreApi';
</script>

<template>
    <Alert>
        <Terminal class="w-4 h-4" />
        <AlertTitle title="Succes" />
        <AlertDescription :description="StoreApi().Succes" />
    </Alert>
</template>