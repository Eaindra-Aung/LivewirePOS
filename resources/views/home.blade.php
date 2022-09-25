@extends('layouts.app')

@section('content')

<x-navbar />
<div class="relative min-h-screen md:flex">
   <x-sidenavbar />
    <x-table />
     <x-order />
</div>
@endsection
